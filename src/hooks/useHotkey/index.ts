import React, { useCallback, useEffect, useMemo } from 'react';

/**
 * ANCHOR: useHotKey는 사용자가 정의한 단축키와 행동들을 정의한다.
 * 1. 입력받은 hotkey를 정규화한다.
 * 2. 콜백을 실행한다.
 */

const ModifierBitMasks = {
  alt: 1,
  ctrl: 2,
  meta: 4,
  shift: 8,
};

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

const isKeyInModifiers = (
  piece: string,
): piece is 'alt' | 'ctrl' | 'meta' | 'shift' => {
  return Object.prototype.hasOwnProperty.call(ModifierBitMasks, piece);
};

const isKeyInShiftKeys = (
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

const isKeyInAlias = (
  piece: string,
): piece is 'win' | 'window' | 'cmd' | 'command' | 'esc' | 'opt' | 'option' => {
  return Object.prototype.hasOwnProperty.call(Aliases, piece);
};

interface Hotkey {
  global: boolean;
  combo: string; // ctrl+y 형식으로 구성되어 있는 string
  onKeyDown: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
}

interface KeyCombo {
  key: string;
  modifiers: number;
}

const parseKeyCombo = (combo: string): KeyCombo => {
  const keys = combo.replace(/\s/g, '').toLowerCase().split('+');
  let modifiers = 0;
  let parsedKey = '';
  // 만약 functional key라면, modifier를 더하고, 그렇지 않다면 키를 할당한다.
  keys.forEach((key) => {
    if (isKeyInModifiers(key)) {
      modifiers += ModifierBitMasks[key];
    } else if (isKeyInShiftKeys(key)) {
      modifiers += ModifierBitMasks.shift;
      parsedKey = ShiftKeys[key];
    } else if (isKeyInAlias(key)) {
      parsedKey = Aliases[key];
    } else {
      parsedKey = key;
    }
  });

  return { key: parsedKey, modifiers };
};

const getKeyComboFromEvent = (e: KeyboardEvent): KeyCombo => {
  const key = e.key !== ' ' ? e.key.toLowerCase() : 'space';
  let modifiers = 0;
  if (e.altKey) modifiers += ModifierBitMasks.alt;
  if (e.ctrlKey) modifiers += ModifierBitMasks.ctrl;
  if (e.metaKey) modifiers += ModifierBitMasks.meta;
  if (e.shiftKey) modifiers += ModifierBitMasks.shift;
  return { key, modifiers };
};

const comboMatches = (
  hotkeyCombo: KeyCombo,
  parsedKeyComboFromEvent: KeyCombo,
) => {
  return (
    hotkeyCombo.key === parsedKeyComboFromEvent.key &&
    hotkeyCombo.modifiers === parsedKeyComboFromEvent.modifiers
  );
};

const useHotkey = (hotkeys: Hotkey[]) => {
  // 미리 계산해둔 useMemo 배열을 이용한다.
  const globalKeys = useMemo(
    () => hotkeys.filter((hotkey) => hotkey.global),
    [hotkeys],
  );
  const localKeys = useMemo(
    () => hotkeys.filter((hotkey) => !hotkey.global),
    [hotkeys],
  );

  // invokeCallback은 global, local을 구분하고 등록된 hotkey에 대한 병령어를 실행한다..
  const invokeCallback = useCallback(
    (
      global: boolean,
      parsedKeyComboFromEvent: KeyCombo,
      callbackName: 'onKeyDown' | 'onKeyUp',
      e: KeyboardEvent,
    ) => {
      (global ? globalKeys : localKeys).forEach((hotkey) => {
        // if keycombo matches event key combo -> call fn
        // here goes matches logics
        if (comboMatches(parseKeyCombo(hotkey.combo), parsedKeyComboFromEvent))
          hotkey[callbackName]?.(e);
      });
    },
    [globalKeys, localKeys],
  );

  // window에서 실행할 hotkey는 global로 정의된다.
  const handleGlobalKeyDown = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(true, getKeyComboFromEvent(e), 'onKeyDown', e);
    },
    [invokeCallback],
  );

  const handleGlobalKeyUp = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(true, getKeyComboFromEvent(e), 'onKeyUp', e);
    },
    [invokeCallback],
  );

  // React 객체에 연결하므로 KeyboardEvent가 아닌 React.KeyboardEvent이다
  const handleLocalKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      invokeCallback(
        false,
        getKeyComboFromEvent(e.nativeEvent),
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
        getKeyComboFromEvent(e.nativeEvent),
        'onKeyUp',
        e.nativeEvent,
      );
    },
    [invokeCallback],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener('keyup', handleGlobalKeyUp);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('keyup', handleGlobalKeyUp);
    };
  }, [handleGlobalKeyDown, handleGlobalKeyUp]);

  return { handleKeyDown: handleLocalKeyDown, handleKeyUp: handleLocalKeyUp };
};

export default useHotkey;
