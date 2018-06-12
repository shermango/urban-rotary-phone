const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function invalidateEmails(emails) {
  const lastCommaIndex = emails.lastIndexOf(',');

  if (lastCommaIndex > 0) emails = emails.replace(/,{1,}$/, '');

  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => EMAIL_REGEX.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }

  return;
}

export default invalidateEmails;
