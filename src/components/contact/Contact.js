import React from "react";
import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <div id="contact" className={classes.form_section}>
      <div className={classes.container}>
        <div className={classes.screen}>
          <div className={classes.screen__body}>
            <div className={`${classes.screen__body__item} ${classes.left}`}>
              <div className={classes.app_title}>
                <span>Contact</span>
                <span>Me</span>
              </div>
              <div className={classes.app_contact}>
                CONTACT INFO : gladys.aldoumani@hotmail.com
              </div>
            </div>
            <form
              action="https://formsubmit.co/d2f6b644f4022364c9cf0c60f66bcb19"
              method="POST"
              className={classes.screen__body__item}
            >
              <div className={classes.app_form}>
                <div className={classes.app_form__group}>
                  <input
                    className={classes.app_form__control}
                    placeholder="NAME"
                    name="name"
                    required
                  />
                </div>
                <div className={classes.app_form__group}>
                  <input
                    className={classes.app_form__control}
                    type="email"
                    placeholder="EMAIL"
                    name="email"
                    required
                  />
                </div>
                <div className={classes.app_form__group}>
                  <input
                    className={classes.app_form__control}
                    placeholder="PHONE"
                    name="number"
                  />
                </div>
                <div className={`${classes.app_form__group} ${classes.message}`}>
                  <input
                    className={classes.app_form__control}
                    placeholder="MESSAGE"
                    name="text"
                    required
                  />
                </div>
                <div className={`${classes.app_form__group} ${classes.buttons}`}>
                  <button type="submit" className={classes.app_form__button}>
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
