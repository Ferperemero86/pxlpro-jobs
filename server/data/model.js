const pkg = require('../../package.json');

module.exports = {
  appVersion: pkg.version,
  assetPath: '/public',
  pageTitle: 'PxlPro Jobs',
  navItems: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Find a job',
      href: '#find-a-job',
    },
    {
      label: 'Careers advice',
      href: '#careers',
    },
    {
      label: 'Job alert',
      href: '#job-alert',
    },
    {
      label: 'Your Jobs',
      href: '#your-jobs',
    },
  ],
  heroMessage: 'Search 1,570 jobs.',
  ctas: [
    {
      icon: 'icon_email.svg',
      title: 'Get instant job alerts',
      subtitle: 'Personalised job recommendations sent straight to your email.',
    },
    {
      icon: 'icon_profile.svg',
      title: 'Create an account for free',
      subtitle: 'Shortlist jobs, manage your job alerts and receive special offers.',
    },
    {
      icon: 'icon_upload.svg',
      title: 'Upload your resume',
      subtitle: 'Upload your resume so our employers can match your details to the best jobs.',
    },
  ],
  jobSectors: [
    { title: 'Accountancy & Finance', quantity: 41 },
    { title: 'Architecture, Building & Planning', quantity: 71 },
    { title: 'Art & Design', quantity: 59 },
    { title: 'Building & Construction', quantity: 49 },
    { title: 'Business & Management', quantity: 247 },
    { title: 'Catering & Hospitality', quantity: 14 },
    { title: 'Computers & IT', quantity: 55 },
    { title: 'Education', quantity: 193 },
    { title: 'Engineering', quantity: 47 },
    { title: 'Media & Journalism', quantity: 123 },
    { title: 'Retail & Wholesale', quantity: 100 },
    { title: 'Sales', quantity: 29 },
    { title: 'Sciences', quantity: 79 },
    { title: 'Sports & Fitness', quantity: 72 },
  ],
  featuredJobs: [
    {
      img: 'microsoft.png',
      title: 'Business Systems Analyst',
      location: 'New York City',
      salary: '$30000-$40000',
      description: 'Microsoft logo',
    },
    {
      img: 'amex.png',
      title: 'Paralegal Positions',
      location: 'Newton, MA',
      salary: 'Competitive salary',
      description: 'American Express logo',
    },
    {
      img: 'nasa.png',
      title: 'Operations Director',
      location: 'Cape Canaveral, FL',
      salary: 'Up to $100,000',
      description: 'Nasa Logo',
    },
  ],
  featuredEmployers: [
    { img: 'citi.png', description: 'Citi logo' },
    { img: 'agstar.png', description: 'Agstar logo' },
    { img: 'ford.png', description: 'Ford logo' },
    { img: 'ioxus.png', description: 'Ioxus logo' },
    { img: 'nike.png', description: 'Nike logo' },
    { img: 'oracle.png', description: 'Oracle logo' },
  ],
  blogArticles: [
    {
      img: 'article1.png',
      description: 'A lady checking her phone',
      title: 'An introduction and the mobile revolution',
      subtitle:
        'There are many ways to market a product or a service and providing the potential clients and customers with testimonials is one of the best',
    },
    {
      img: 'article2.png',
      description: 'Mountains view',
      title: 'The pros and cons of taking a digital detox in the modern age',
    },
    {
      img: 'article3.png',
      description: 'Desktop with laptop in the office',
      title: 'Why should your company value user experience research?',
    },
    {
      img: 'article4.png',
      description: 'A zoomed laptop view',
      title: "We're in the age of big data. But it's what you do with it what matters",
    },
    {
      img: 'article5.png',
      description: 'A lady working in her laptop',
      title: "Industry focus: A look inside Invision's studio in California",
    },
  ],
  featuredCampaigns: [
    { title: 'Jobs in the United States' },
    { title: 'Management jobs in New York' },
    { title: 'Graduate Jobs' },
    { title: 'Engeneering jobs in Chicago' },
    { title: 'Jobs in California' },
  ],
  socialLinks: [
    { img: 'Facebook.svg', href: '#', description: 'Facebook icon' },
    { img: 'Twitter.svg', href: '#', description: 'Twitter icon' },
    { img: 'GooglePlus.svg', href: '#', description: 'Google Plus icon' },
    { img: 'LinkedIn.svg', href: '#', description: 'LinkedIn icon' },
  ],
};
