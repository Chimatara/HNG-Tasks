
function updateProfileInfo() {

    const getLogo = document.getElementById('logo');
    getLogo.textContent = 'CK.';

    const contactDetails = document.getElementById('contact');
    contactDetails.href = 'mailto:chimatarakalu@gmail.com?subject = Feedback&body = Message';
    contactDetails.textContent = 'Contact Me';

    // Slack Name
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = 'Chimatara Kalu.'; 

    const myIntroName= document.getElementById('myName');
    myIntroName.textContent = 'Chimatara';
  
    // Slack Display Picture
    const slackDisplayImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
    slackDisplayImageElement.src = 'https://ca.slack-edge.com/T05FFAA91JP-U05R8J2JCTY-8031e7f7f76f-512';
    slackDisplayImageElement.alt = 'Chimatara Kalu'; 
  
    // Current Day of the Week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getUTCDay();
    const currentDay = daysOfWeek[currentDayIndex];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[currentDate.getUTCMonth()];
    const currentDayOfMonth = currentDate.getUTCDate();
    const currentYear = currentDate.getUTCFullYear();
    const currentDateFormatted = `${currentDay}, ${currentMonth} ${currentDayOfMonth} ${currentYear}`;
    
    currentDayElement.textContent = `Date: ${currentDateFormatted}`;
  
    // Current UTC Time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const utcTimeInMilliseconds = currentDate.getTime();
    currentUTCTimeElement.textContent = `UTC Time in Milliseconds: ${utcTimeInMilliseconds}`;
    
    // Track
    const myTrackElement = document.querySelector('[data-testid="myTrack"]');
    myTrackElement.textContent = 'My Track: Frontend';
  
    // GitHub URL
    const githubURLElement = document.querySelector('[data-testid="githubURL"]');
    githubURLElement.href = 'https://github.com/Chimatara/HNG-Tasks'; 
  }
  
  // Call the updateProfileInfo function when the page loads
  window.addEventListener('load', updateProfileInfo);
  