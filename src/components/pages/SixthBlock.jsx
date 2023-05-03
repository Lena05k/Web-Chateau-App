import React, { updateInput } from 'react';
import imagesGradiend from '../../assets/imagesGradiend';
import imagesLogo from '../../assets/imagesLogo';
import add from './../../sendEmails';

class SixthBlock extends React.Component {
  constructor(props) {
    super();
    this.state = {email: ''};
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const db = add.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = db.collection('users').add({
      email: this.state.email,
    });
    this.setState({
      email: '',
    });
  };

  render() {
    return (
      <footer className="relative max-w-c-10 h-381 z-0 bg-blue-feedback mx-auto rounded-32 mb-18
                       laptop:w-950 laptop:h-342
                       small-pc:mt-14 small-pc:w-704 small-pc:h-259
                       mobile:max-w-c-2 mobile:max-h-c-10"
      >
        <div className="pt-10 pl-12 z-50 relative
                      small-pc:pt-6 small-pc:pl-9
                      mobile:pl-c-16 mobile:pt-c-32"
        >
          <h4 className="font-Gilroy font-bold text-56 mb-016 text-white
                       laptop:text-40
                       small-pc:mb-0 small-pc:text-32
                       mobile:text-36"
          >
            Connect with us
          </h4>
          <div className="">
            <p className="font-Gilroy font-medium text-24 text-white tracking-[-.03em]
                        small-pc:leading-[140%] small-pc:w-240 small-pc:text-base-001
                        mobile:text-16"
            >
              Write your email and we will contact you for collaboration
            </p>
          </div>
          <form
            id="formEmail"
            className="mt-12 small-pc:mt-10"
            onSubmit={this.addUser}
            action=""
            method="post"
          >
            <div className="flex
                          mobile:flex-col"
            >
              <div className="mr-6 pl-28 pt-22 pr-22 border border-white w-423 h-16 rounded-12
                            laptop:w-350
                            small-pc:w-296 small-pc:h-48 small-pc:mr-4 small-pc:pl-4 small-pc:pt-[13px]
                            mobile:w-296 mobile:h-48 mobile:pl-c-16 mobile:pt-c-11"
              >
                <input
                  type="email"
                  name="email"
                  className="w-full focus:outline-none text-24 placeholder:opacity-50 placeholder:text-24 placeholder:text-Gilroy placeholder:text-white text-left  bg-transparent mx-auto
                           small-pc:placeholder:text-base-01 small-pc:text-base-01 small-pc:mb-c-4
                           mobile:placeholder:text-16 mobile:mb-c-4"
                  placeholder="Your email"
                  onChange={this.updateInput}
                  value={this.state.email}
                />
              </div>
              <button
                type="submit"
                name="email"
                className="w-177 h-16 bg-white rounded-12 text-24 text-black-850 font-medium
                         small-pc:text-base-01 small-pc:w-144 small-pc:h-48
                         mobile:w-296 mobile:h-48 mobile:mt-c-16 mobile:text-16"
              >
                Send
              </button>
            </div>
          </form>
          <img
            className="rounded-r-12 absolute right-0 top-0
                     small-pc:hidden laptop:scale-90 laptop:translate-x-[5%] laptop:translate-y-[-5%]
                     mobile:hidden"
            src={imagesLogo.logoFeedback}
            alt="logo_feedback"
          />
        </div>
        <div className="bottom-0 left-0 absolute z-10 w-full h-full rounded-2xl">
          <img
            className="w-full h-full rounded-2xl
                     mobile:hidden"
            src={imagesGradiend.feedbackBg}
            alt="Feedback Bg"
          />
          <img
            className="w-full h-full rounded-2xl hidden
                      mobile:block"
            src={imagesGradiend.gradientFooter}
            alt="Gradient footer"
          />
        </div>
      </footer>
    );
  }
};

export default SixthBlock;
