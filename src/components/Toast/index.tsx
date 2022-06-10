import ReactDOM from 'react-dom/client';
import ToastManager from './ToastManager';

class Toast {
  portal: null | HTMLElement = null;

  createToast: undefined | ((message: string, duration: number) => void) =
    undefined;

  constructor() {
    const portalId = 'toast-portal';
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;
      return;
    }
    this.portal = document.createElement('div');
    this.portal.id = portalId;
    document.body.appendChild(this.portal);
    const element = ReactDOM.createRoot(this.portal);
    element.render(
      // TODO: add postmanager to this.porta
      <ToastManager
        bind={(createToast) => {
          this.createToast = createToast;
        }}
      />,
    );
  }

  // this is interface of toast manager
  show(message: string, duration = 2000) {
    this.createToast?.(message, duration);
  }
}

export default new Toast();
