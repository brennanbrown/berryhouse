# Netlify Forms Setup Guide

The contact form at `/contact/` is now configured to work with Netlify Forms.

## How It Works

1. **Form Configuration**: The contact form includes:
   - `data-netlify="true"` attribute for Netlify to detect the form
   - `name="contact"` to identify the form
   - Hidden `form-name` field required by Netlify
   - Honeypot spam protection with `netlify-honeypot="bot-field"`

2. **Success Page**: After submission, users are redirected to `/contact/success/`

3. **Email Notifications**: Configured in `netlify.toml` to send to `hi@berryhouse.ca`

## Testing the Form

### Local Testing
The form won't work fully in local development. To test locally:
1. Remove the `data-netlify="true"` attribute temporarily
2. Add a JavaScript form handler for testing
3. Remember to restore the attribute before deploying

### Testing on Netlify
1. Deploy to Netlify
2. Go to your Netlify dashboard → Site → Forms
3. Submit a test message through the live contact form
4. Check that:
   - The submission appears in Netlify dashboard
   - You receive an email notification
   - Users are redirected to the success page

## Managing Form Submissions

### In Netlify Dashboard
1. Navigate to: **Site Settings → Forms**
2. View all submissions in: **Forms → Active forms → contact**
3. Download submissions as CSV
4. Set up additional integrations (Slack, Zapier, etc.)

### Email Notifications
Email notifications are configured in `netlify.toml`:
```toml
[forms.contact]
  to = "hi@berryhouse.ca"
  subject = "New Contact Form Submission from Berry House"
```

To change the recipient email, update the `to` field and redeploy.

## Spam Protection

The form includes built-in spam protection:
- **Honeypot field**: Hidden field that bots often fill out
- **Netlify's built-in filtering**: Automatically filters obvious spam
- **reCAPTCHA** (optional): Can be added with `data-netlify-recaptcha="true"`

## Advanced Configuration

### Adding reCAPTCHA
Add to the form element:
```html
<form ... data-netlify-recaptcha="true">
```

Then add the reCAPTCHA div before the submit button:
```html
<div data-netlify-recaptcha="true"></div>
```

### Custom Success Message
Instead of redirecting to a success page, you can show a custom message by removing the `action` attribute and handling the response with JavaScript.

### Webhook Integration
In Netlify dashboard, add outgoing webhooks to integrate with:
- Slack notifications
- Zapier workflows
- Custom APIs

## Troubleshooting

### Form Not Appearing in Dashboard
- Ensure the site has been deployed at least once after adding the form
- Check that `data-netlify="true"` is present in the built HTML
- Verify the hidden `form-name` input matches the form's `name` attribute

### Not Receiving Email Notifications
- Check spam folder
- Verify email address in `netlify.toml`
- Ensure the site has been redeployed after configuration changes
- Check Netlify dashboard for form submissions to confirm they're being received

### Form Submitting to 404
- Ensure the success page exists at `/contact/success/`
- Check that the `action` attribute is set correctly
- Verify the success page was built and deployed

## Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Forms Spam Filtering](https://docs.netlify.com/forms/spam-filters/)
- [Form Notifications](https://docs.netlify.com/forms/notifications/)
