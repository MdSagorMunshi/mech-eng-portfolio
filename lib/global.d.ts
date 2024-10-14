interface Window {
    grecaptcha?: {
      reset: () => void;
      render: (container: string | HTMLElement, parameters: any) => string;
      execute: (opt_widget_id?: string | number) => void;
    };
  }
