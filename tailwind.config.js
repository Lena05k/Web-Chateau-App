module.exports = {
  content: [
    './public/*.{html}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': [{'mim': '360px', 'max': '767px'}],
        'small-pc': [{'min': '768px', 'max': '1024px'}],
        'laptop': [{'min': '1024px', 'max': '1279px'}],
        'pc': [{'min': '1280', 'max': '1535px'}],
        'large-pc': {'min': '1536'},
      },
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '86': '.86',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '166': '1.66',
        '150': '1.5',
        '200': '2',
      },
      fontFamily: {
        gilroy: ['Gilroy']
      },
      fontSize: {
        '5.5xl': ['56px', '68px'],
        '4.8xl': ['44px', '54px'],
        '1xl': ['20px', '24px'],
        '2.5xl': ['28px', '120%'],
        '1.01xl': ['20px', '25px'],
        'base-1': ['16px', '140%'],
        'base-01': ['16px', '19px'],
        'base-001': ['14px', '17px'],
        '12': ['12px', '14px'],
        '14': ['14px', '17px'],
        '16': ['16px', '140%'],
        '18': '18px',
        '22': '22px',
        '20': ['20px', '28px'],
        '24': ['24px', '28px'],
        '28': '28px',
        '32': ['32px', '39px'],
        '34': ['34px', '42px'],
        '36': ['36px', '110%'],
        '40': '40px',
        '46': '46px',
        '52': ['52px', '110%'],
        '56': ['56px', '69px'],
        '64': '64px',
      },
      colors: {
        'fuchsia-550': '#C859EF',
        'fuchsia-560': '#E359EF',
        'black-850': '#07021C',
        'blue-feedback': '#170B42',
        'blue-850': '#1A0C49',
        'pink-light': '#E359EF',
        'blue-deep': '#29156C',
        'black-blur': 'rgba(0,0,0,0.2)',
        'black-001': '#07021C',
        'swamp': '#EDFB8B',
      },
      borderWidth: {
        '3': '3px',
        DEFAULT: '1px',
        '0': '0',
      },
      width: {
        '1/4': '25%',
        '18.8': '18.8',
        '20': '20px',
        '35': '35px',
        '37': '154px',
        '38': '38px',
        '40': '40',
        '42': '42px',
        '46': '46px',
        '47': '47px',
        '50': '50px',
        '52': '52px',
        '57': '57px',
        '63': '246px',
        '74': '74px',
        '75': '75px',
        '77': '77px',
        '82': '82px',
        '80': '306px',
        '85': '358px',
        '90': '90px',
        '103': '103px',
        '120': '120px',
        '124': '124px',
        '137': '137px',
        '142': '142px',
        '144': '144px',
        '153': '153px',
        '164': '164px',
        '177': '177px',
        '179': '179px',
        '180': '180px',
        '184': '184px',
        '187': '187px',
        '192': '192px',
        '201': '201px',
        '200': '200px',
        '208': '208px',
        '211': '211px',
        '219': '219px',
        '246': '246px',
        '232': '232px',
        '238': '238px',
        '240': '240px',
        '252': '252px',
        '261': '261px',
        '262': '262px',
        '265': '265px',
        '267': '267px',
        '268': '268px',
        '270': '270px',
        '277': '277px',
        '282': '282px',
        '285': '285px',
        '287': '287px',
        '288': '288px',
        '291': '291px',
        '296': '296px',
        '306': '306px',
        '318': '318px',
        '319': '319px',
        '328': '328px',
        '325': '325px',
        '327': '327px',
        '331': '331px',
        '344': '344px',
        '350': '350px',
        '351': '351px',
        '353': '353px',
        '360': '360px',
        '368': '368px',
        '369': '369px',
        '382': '382px',
        '385': '385px',
        '391': '391px',
        '400': '400px',
        '404': '404px',
        '406': '406px',
        '410': '410px',
        '418': '418px',
        '423': '423px',
        '443': '443px',
        '447': '447px',
        '451': '451px',
        '469': '469px',
        '500': '500px',
        '518': '518px',
        '544': '544px',
        '560': '560px',
        '570': '570px',
        '572': '572px',
        '620': '620px',
        '700': '700px',
        '704': '704px',
        '736': '736px',
        '768': '768px',
        '786': '786',
        '900': '900px',
        '983': '983px',
        '800': '800px',
        '950': '950px',
        '1000': '1000px',
        '1168': '1168px',
      },
      height: {
        'HeightFeaturesTablet': '143px',
        'HeightFeatures': '221px',
        '38': '38px',
        '42': '42px',
        '51': '51px',
        '52': '52px',
        '64': '64px',
        '48': '48px',
        '136': '136px',
        '208': '208px',
        '259': '259px',
        '302': '302px',
        '316': '316',
        '342': '342px',
        '394': '394px',
        '381': '381px',
        '474': '474px',
        '504': '504px',
        '575': '575px',
        '600': '600px',
        '620': '620px',
        '699': '699px',
        '744': '744px',
        '823': '823px'
      },
      maxWidth: {
        '1': '322px',
        'c-1': '22.06rem',
        'c-2': '20.5rem',
        'c-5': '44rem',
        'c-7': '59.375',
        'c-10': '73rem',
      },
      maxHeight: {
        'c-10': '316px',

      },
      margin: {
        'c-4': '4px',
        'c-6': '6px',
        'c-8': '8px',
        'c-10': '10px',
        'c-12': '12px',
        'c-13': '13px',
        'c-14': '14px',
        'c-16': '16px',
        'c-20': '20px',
        'c-21': '21px',
        'c-23': '23px',
        'c-24': '24px',
        'c-25': '25px',
        'c-32': '32px',
        'c-35': '35px',
        'c-40': '40px',
        'c-42': '42px',
        'c-41': '41px',
        'c-48': '48px',
        'c-50': '50px',
        'c-57': '57px',
        'c-59': '59px',
        'c-80': '80px',
        'c-94': '94px',
        'c-143': '143px',
        'c-225': '225',
        '3.2': '13px',
        '016': '16px',
        '18': '71px',
        '33': '136px',
        '24': '24px',
        '48': '48px',
        '70': '70px',
        '96': '96px',
        '120': '120px',
        '192': '192px',
        '204': '204px'
      },
      padding: {
        'c-10.5': '10.5px',
        'c-11': '11px',
        'c-16': '16px',
        'c-21': '21px',
        'c-32': '32px',
        'c-40': '40px',
        'c-50': '50px',
        '18': '18px',
        '22': '22px',
        '28': '28px',
      },
      zIndex: {
        '1': '-1',
        'c-2': '-2'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
      },
      borderRadius: {
        '12': '12px',
        '20': '20px',
        '32': '32px',
        '150': '150px',
      },
      lineHeight: {
        '110percent': '110%',
      },
      backgroundSize: {
        '2': '2px'
      },
      spacing: {
        '56': '3.5rem',
      }
    },
    plugins: [],
  }
};
