export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  export const Icons = {
    twitter: 'twitter',
    facebook: 'facebook',
    github: 'github',
    google: 'google',
    youtube: 'youtube',
    whatsapp: 'whatsapp',
    gmail: 'gmail',
    linkedin: 'linkedin',
    instagram: 'instagram',
    close: 'close',
    coin: 'coin',
    trophy: 'trophy',
  };
  
  export const Sprites = {
    'nes-pokeball': 'nes-pokeball',
    'nes-bulbasaur': 'nes-bulbasaur',
    'nes-charmander': 'nes-charmander',
    'nes-squirtle': 'nes-squirtle',
    'nes-smartphone': 'nes-smartphone',
    'nes-kirby': 'nes-kirby',
    'nes-phone': 'nes-phone',
    'nes-octocat animate': 'nes-octocat animate',
    'nes-ash': 'nes-ash',
    'nes-mario': 'nes-mario',
    'nes-logo': 'nes-logo',
    'nes-jp-logo': 'nes-jp-logo',
    'snes-logo': 'snes-logo',
    'snes-jp-logo': 'snes-jp-logo',
  };
  
  export const Reactions = {
    heart: 'heart',
    star: 'star',
    like: 'like',
  };
  
  export const Size = {
    default: '',
    'is-small': 'is-small',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  };