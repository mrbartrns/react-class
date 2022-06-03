import React, { useCallback, useEffect, useMemo } from 'react';

interface HotKey {
  global: boolean;
  combo: string;
  onKeyDown: (e: React.KeyboardEvent | KeyboardEvent) => void;
  onKeyUp: (e: React.KeyboardEvent | KeyboardEvent) => void;
}

interface KeyCombo {
  modifiers: number;
  key: string;
}

const ModifierBitMasks = {
  alt: 1,
  ctrl: 2,
  meta: 4,
  shift: 8,
};

// hotkey 변환을 위한 enum
const ShiftKeys = {
  '~': '`',
  '!': '1',
  '@': '2',
  '#': '3',
  $: '4',
  '%': '5',
  '^': '6',
  '&': '7',
  '*': '8',
  '(': '9',
  ')': '0',
  _: '-',
  '+': '=',
  '{': '[',
  '}': ']',
  '|': '\\',
  ':': ';',
  '"': "'",
  '<': ',',
  '>': '.',
  '?': '/',
};

const Aliases = {
  win: 'meta',
  window: 'meta',
  cmd: 'meta',
  command: 'meta',
  esc: 'escape',
  opt: 'alt',
  option: 'alt',
};

const checkKeyinModifiers = (
  piece: string,
): piece is 'alt' | 'ctrl' | 'meta' | 'shift' => {
  return Object.prototype.hasOwnProperty.call(ModifierBitMasks, piece);
};

const checkKeyInShiftKeys = (
  piece: string,
): piece is
  | '~'
  | '!'
  | '@'
  | '#'
  | '$'
  | '%'
  | '^'
  | '&'
  | '*'
  | '('
  | ')'
  | '_'
  | '+'
  | '{'
  | '}'
  | ':'
  | '"'
  | '|'
  | '<'
  | '>'
  | '?' => {
  return Object.prototype.hasOwnProperty.call(ShiftKeys, piece);
};

const checkKeyinAlias = (
  piece: string,
): piece is 'win' | 'window' | 'cmd' | 'command' | 'esc' | 'opt' | 'option' => {
  return Object.prototype.hasOwnProperty.call(Aliases, piece);
};

const getKeyCombo = (e: KeyboardEvent) => {
  const key = e.key !== ' ' ? e.key.toLowerCase() : 'space';
  let modifiers = 0; // ctrl, meta, shift ...
  // 비트마스크처럼 사용하기 위해
  if (e.altKey) modifiers += ModifierBitMasks.alt;
  if (e.ctrlKey) modifiers += ModifierBitMasks.ctrl;
  if (e.metaKey) modifiers += ModifierBitMasks.meta;
  if (e.shiftKey) modifiers += ModifierBitMasks.shift;
  return { modifiers, key };
};

// ANCHOR: 콤보로부터 받은 key combo를 다시 한번 가공한다.
// TODO: onKeyUp 필수가 아니도록 하기
const parseKeyCombo = (combo: string) => {
  const pieces = combo.replace(/\s/g, '').toLowerCase().split('+');
  let modifiers = 0;
  let key = '';

  pieces.forEach((piece) => {
    if (checkKeyinModifiers(piece)) {
      modifiers += ModifierBitMasks[piece];
    } else if (checkKeyInShiftKeys(piece)) {
      modifiers += ModifierBitMasks.shift;
      key = ShiftKeys[piece];
    } else if (checkKeyinAlias(piece)) {
      key = Aliases[piece];
    } else {
      key = piece;
    }
  });

  return { modifiers, key };
};

const comboMatches = (a: KeyCombo, b: KeyCombo) => {
  return a.modifiers === b.modifiers && a.key === b.key;
};

const useHotKey = (hotkeys: HotKey[]) => {
  const localKeys = useMemo(
    () => hotkeys.filter((hotkey) => !hotkey.global),
    [hotkeys],
  );
  const globalKeys = useMemo(
    () => hotkeys.filter((hotkey) => hotkey.global),
    [hotkeys],
  );

  const invokeCallback = useCallback(
    (
      global: boolean,
      combo: KeyCombo,
      callbackName: 'onKeyDown' | 'onKeyUp',
      e: React.KeyboardEvent | KeyboardEvent,
    ) => {
      (global ? globalKeys : localKeys).forEach((hotkey) => {
        // TODO: 단축키 처리
        // callbackName: onKeyDown, onKeyUp
        // 파싱한 키 콤보와 이벤트를 통해 받은 키 콤보가 동일한지 체크해야 함
        if (comboMatches(parseKeyCombo(hotkey.combo), combo))
          hotkey[callbackName](e);
      });
    },
    [globalKeys, localKeys],
  );

  const handleGlobalKeyDown = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(true, getKeyCombo(e), 'onKeyDown', e);
    },
    [invokeCallback],
  );

  const handleGlobalKeyUp = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(true, getKeyCombo(e), 'onKeyUp', e);
    },
    [invokeCallback],
  );

  const handleLocalKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      invokeCallback(
        false,
        getKeyCombo(e.nativeEvent),
        'onKeyDown',
        e.nativeEvent,
      );
    },
    [invokeCallback],
  );

  const handleLocalKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      invokeCallback(
        false,
        getKeyCombo(e.nativeEvent),
        'onKeyUp',
        e.nativeEvent,
      );
    },
    [invokeCallback],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
    document.addEventListener('keyup', handleGlobalKeyUp);
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
      document.removeEventListener('keyup', handleGlobalKeyUp);
    };
  }, [handleGlobalKeyDown, handleGlobalKeyUp]);

  return { handleKeyDown: handleLocalKeyDown, handleKeyUp: handleLocalKeyUp };
};

export default useHotKey;
