
export interface ThemeInterface {
  blue: string;
  green: string;
  azure: string;
  azure2: string;
  gray: string;
  success: string;
  error: string;
  form: {
    borderColor: string;
    focus: {
      borderColor: string;
    };
  };
  button: {
    borderColor: string;
    color: string;
    hover: {
      background: string;
    };
  };
  [key: string]: any;
}

export const theme: ThemeInterface = {
  blue: '#2f365f',
  azure: '#26a6ed',
  azure2: '#3eb0ef',
  gray: '#738a94',
  green: '#4dc0b5',
  success: '#7ac142',
  error: 'red',
  form: {
    borderColor: '#dae1e7',
    focus: {
      borderColor: '#4dc0b5',
    },
  },
  button: {
    borderColor: '#4dc0b5',
    color: '#fff',
    hover: {
      background: '#4dc0b5',
    },
  },
};
