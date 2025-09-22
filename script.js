const data = {
  fullName: 'Rajkumar Bhoi',
  headline: 'BCA Student • Aspiring IT Professional',
  about: 'Pursuing BCA with a focus on networking, hardware, and cybersecurity. Experienced in IT support and customer service roles.',
  location: 'Udaipur, Rajasthan',
  email: 'rajkumarbhoi6076@gmail.com',
  resumeHref: 'assets/resume.docx'
}
document.getElementById('fullname').textContent = data.fullName;
document.getElementById('headline').textContent = data.headline;
document.getElementById('about').textContent = data.about;
document.getElementById('location').textContent = data.location;
document.getElementById('emailLink').href = 'mailto:' + data.email;
document.getElementById('emailLink').textContent = data.email;
document.getElementById('mail').href = 'mailto:' + data.email;
document.getElementById('resumeLink').href = data.resumeHref;
document.getElementById('year').textContent = new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Someone';
  const email = document.getElementById('contactEmail').value || data.email;
  const message = document.getElementById('message').value || '';
  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent(message + '\n\nReply to: ' + email);
  window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
}