# SendGrid Integration Setup Guide

## 🚀 Overview

The ContactForm is now fully integrated with SendGrid for production-ready email functionality. The implementation includes:

- ✅ **Form Validation**: Client and server-side validation
- ✅ **Rate Limiting**: Redis-based rate limiting (optional)
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Internationalization**: Full i18n support for all form elements
- ✅ **Loading States**: Visual feedback during form submission
- ✅ **Success/Error Alerts**: Clear user feedback

## 🔧 Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```bash
# Required: SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_SENDER_EMAIL=noreply@yourdomain.com
SENDGRID_RECEIVER_EMAIL=contact@yourdomain.com

# Optional: SendGrid Template for confirmation emails
SENDGRID_TEMPLATE_ID=your_sendgrid_template_id_here

# Optional: Upstash Redis for rate limiting
UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here
```

## 📧 SendGrid Setup Instructions

### 1. Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com)
2. Create a free account (100 emails/day)
3. Verify your domain or use a verified sender

### 2. Get API Key
1. Navigate to Settings → API Keys
2. Create a new API Key with "Mail Send" permissions
3. Copy the API key to your `.env.local`

### 3. Configure Sender Email
1. Go to Settings → Sender Authentication
2. Verify your domain or single sender
3. Use the verified email as `SENDGRID_SENDER_EMAIL`

### 4. Set Receiver Email
- Set `SENDGRID_RECEIVER_EMAIL` to the email where you want to receive contact form submissions

### 5. Optional: Email Templates
1. Go to Marketing → Email Templates
2. Create a confirmation template
3. Use variables: `{{fullname}}`, `{{subject}}`, `{{message}}`
4. Copy the template ID to `SENDGRID_TEMPLATE_ID`

## 🔄 Rate Limiting Setup (Optional)

### Upstash Redis Setup
1. Go to [Upstash.com](https://upstash.com)
2. Create a Redis database
3. Copy the REST URL and Token to your `.env.local`

**Note**: Rate limiting is optional. The form will work without Redis configuration.

## 🧪 Testing

### Development Testing
```bash
npm run dev
```

1. Navigate to `/de/contact-us` or `/en/contact-us`
2. Fill out the form
3. Submit and check console logs
4. Verify emails are sent

### Expected Console Output
```
⚠️ Upstash Redis configuration missing - rate limiting disabled
Sending confirmation mail with data: {...}
```

## 🚨 Error Handling

The implementation handles various error scenarios:

- **Missing Environment Variables**: Graceful fallbacks with warnings
- **Invalid Email**: Server-side email validation
- **SendGrid Errors**: Detailed error logging
- **Network Issues**: Connection error messages
- **Rate Limiting**: User-friendly rate limit messages

## 📱 Features

### Form Features
- ✅ Real-time validation
- ✅ Loading states with spinner
- ✅ Success/error alerts
- ✅ Form reset on success
- ✅ Disabled state during submission
- ✅ Email format validation

### API Features
- ✅ Rate limiting (3 requests/hour per IP)
- ✅ Input validation
- ✅ Error handling
- ✅ Confirmation emails
- ✅ Detailed logging

### i18n Support
- ✅ German translations
- ✅ English translations
- ✅ Form labels and placeholders
- ✅ Validation messages
- ✅ Success/error messages

## 🔒 Security Features

- **Rate Limiting**: Prevents spam submissions
- **Input Validation**: Server-side validation
- **Email Validation**: Proper email format checking
- **Error Sanitization**: Safe error messages
- **Environment Variables**: Secure configuration

## 🚀 Production Deployment

### Vercel Deployment
1. Add environment variables in Vercel dashboard
2. Deploy your application
3. Test the contact form

### Environment Variables for Production
```bash
SENDGRID_API_KEY=your_production_api_key
SENDGRID_SENDER_EMAIL=noreply@wir-helfen-aus.de
SENDGRID_RECEIVER_EMAIL=contact@wir-helfen-aus.de
SENDGRID_TEMPLATE_ID=your_template_id
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

## 📊 Monitoring

### Console Logs
- Rate limiting status
- Email sending attempts
- Error details
- Configuration warnings

### SendGrid Dashboard
- Email delivery status
- Bounce rates
- Spam reports
- Template usage

## 🛠 Troubleshooting

### Common Issues

1. **"Rate limiting disabled" warning**
   - This is normal if Redis is not configured
   - Form will work without rate limiting

2. **"Template ID not configured" warning**
   - Confirmation emails will be skipped
   - Main notification email will still be sent

3. **SendGrid API errors**
   - Check API key validity
   - Verify sender email authentication
   - Check SendGrid dashboard for details

4. **Form not submitting**
   - Check browser console for errors
   - Verify API route is accessible
   - Check network tab for request details

## 📞 Support

If you encounter issues:

1. Check the console logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first
4. Check SendGrid dashboard for delivery status

---

**Implementation Status**: ✅ **Production Ready**

The ContactForm is now fully integrated with SendGrid and ready for production use! 