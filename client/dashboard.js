document.addEventListener('DOMContentLoaded', async () => {
  const userInfo = document.getElementById('user-info');
  const courseList = document.getElementById('course-list');
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Please log in to access the dashboard');
    window.location.href = '/client/index.html';
    return;
  }

  try {
    const userResponse = await fetch('http://localhost:3000/api/auth/me', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    });
    const userData = await userResponse.json();
    if (userResponse.ok) {
      userInfo.textContent = `Welcome, ${userData.username}`;
    } else {
      throw new Error(userData.error || 'Failed to fetch user data');
    }

    const courseResponse = await fetch('http://localhost:3000/api/student/courses', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    });
    const courseData = await courseResponse.json();
    if (courseResponse.ok) {
      courseList.innerHTML = courseData.map(course => `
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h4 class="text-lg font-semibold">${course.code}: ${course.name}</h4>
          <p class="text-gray-600">${course.description}</p>
          <p class="text-sm text-gray-500">Credits: ${course.credits} | Semester: ${course.semester}</p>
        </div>
      `).join('');
    } else {
      throw new Error(courseData.error || 'Failed to fetch courses');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Unable to connect to the server: ' + err.message);
  }
});

function logout() {
  localStorage.removeItem('token');
  window.location.href = '/client/index.html';
}