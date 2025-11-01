# Netlify Forms Setup Guide

The contact form at `/contact/` is now configured to work with Netlify Forms.

## How It Works

1. **Form Configuration**: The contact form includes:
   - `data-netlify="true"` attribute for Netlify to detect the form
   - `name="contact"` to identify the form
   - Hidden `form-name` field required by Netlify
   - Honeypot spam protection with `netlify-honeypot="bot-field"`

2. **Success Page**: After submission, users are redirected to `/contact/success/`

3. **Email Notifications**: Must be configured in the Netlify UI (see setup steps below)

## Initial Setup in Netlify UI

After deploying your site, you need to enable form detection:

1. Go to your Netlify dashboard
2. Navigate to [**Forms**](https://app.netlify.com/projects/berryhouse/forms)
3. Select **Enable form detection**
4. Deploy (or redeploy) your site

Netlify will automatically scan your site for forms with the `data-netlify="true"` attribute.

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

Email notifications must be configured in the Netlify UI:

1. Go to your site in Netlify
2. Navigate to **Configuration → Notifications → Form submission notifications**
3. Select **Add notification**
4. Choose **Email notification**
5. Select the form name: **contact**
6. Enter the email address: **hi@berryhouse.ca**
7. (Optional) Customize the subject line
8. Save the notification

You can set up multiple notification recipients or integrate with services like Slack, webhooks, or Zapier.

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
- Verify notification is set up in Netlify UI: **Configuration → Notifications**
- Confirm the email address is correct in the notification settings
- Check Netlify dashboard for form submissions to confirm they're being received
- Make sure you selected the correct form name when setting up the notification

### Form Submitting to 404
- Ensure the success page exists at `/contact/success/`
- Check that the `action` attribute is set correctly
- Verify the success page was built and deployed

## Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Forms Spam Filtering](https://docs.netlify.com/forms/spam-filters/)
- [Form Notifications](https://docs.netlify.com/forms/notifications/)
