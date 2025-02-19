import { View } from 'okta';
import hbs from 'handlebars-inline-precompile';
import BaseAuthenticatorEmailView from './BaseAuthenticatorEmailView';

const BaseAuthenticatorEmailForm = BaseAuthenticatorEmailView.prototype.Body;

// Courage doesn't support HTML, hence creating a subtitle here.
const CheckYourEmailTitle = View.extend({
  className: 'okta-form-subtitle',
  attributes: {
    'data-se': 'o-form-explain',
  },
  template: hbs`
    {{#if email}}
      {{i18n 
          code="oie.email.verify.alternate.magicLinkToEmailAddress" 
          bundle="login" 
          arguments="email" 
          $1="<span class='strong'>$1</span>"
      }}
    {{else}}
      {{i18n 
        code="oie.email.verify.alternate.magicLinkToYourEmail" 
        bundle="login"
      }}
    {{/if}}
    
    {{#if useEmailMagicLinkValue}}
      {{i18n 
        code="oie.email.verify.alternate.instructions" 
        bundle="login" 
      }}
    {{else}}
      {{i18n 
        code="oie.email.verify.alternate.verificationCode.instructions" 
        bundle="login" 
      }}
    {{/if}}
  `,

  getTemplateData() {
    return this.options;
  },
});

const EnterCodeLink = View.extend({
  template: hbs`
    <button 
      class="button-link enter-auth-code-instead-link"
    >
        {{i18n code="oie.email.verify.alternate.showCodeTextField"}}
    </button>
  `,
});

const Body = BaseAuthenticatorEmailForm.extend(
  Object.assign({
    noButtonBar: true,
    resendEmailAction: 'currentAuthenticatorEnrollment-resend',

    events: {
      'click .enter-auth-code-instead-link': 'showAuthCodeEntry',
    },

    initialize() {
      BaseAuthenticatorEmailForm.prototype.initialize.apply(this, arguments);

      const { email } =
        this.options.currentViewState.relatesTo?.value?.profile || {};

      const useEmailMagicLinkValue = this.isUseEmailMagicLink();

      if (useEmailMagicLinkValue) {
        this.add(EnterCodeLink, {
          prepend: true,
          selector: '.o-form-error-container',
        });
      } 

      this.add(CheckYourEmailTitle, {
        prepend: true,
        selector: '.o-form-error-container',
        options: { email, useEmailMagicLinkValue },
      });
    },

    postRender() {
      BaseAuthenticatorEmailForm.prototype.postRender.apply(this, arguments);
      if (this.isUseEmailMagicLink()) {
        this.showCodeEntryField(false);
      } else {
        this.noButtonBar = false;
      }
    },

    isUseEmailMagicLink() {
      const useEmailMagicLink = this.options.appState.get('currentAuthenticatorEnrollment')?.
      contextualData?.useEmailMagicLink;
      return useEmailMagicLink !== undefined ? useEmailMagicLink : true;
    },

    showAuthCodeEntry() {
      this.noButtonBar = false;
      this.render();

      this.showCodeEntryField(true);
      this.showEnterAuthCodeInsteadLink(false);
    },

    showCodeEntryField(show = true) {
      const $textField = this.$el.find('.o-form-fieldset-container');
      $textField.toggle(show);
    },

    showEnterAuthCodeInsteadLink(show = true) {
      const $enterAuthCodeInsteadLink = this.$el.find(
        '.enter-auth-code-instead-link'
      );
      $enterAuthCodeInsteadLink.toggle(show);
    },
  })
);

export default BaseAuthenticatorEmailView.extend({
  Body,
});
