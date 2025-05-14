// Add numbers 1 to 12
    const clock = document.getElementById('clock');
    for (let i = 1; i <= 12; i++) {
      const angle = i * 30;
      const number = document.createElement('div');
      number.className = 'number';
      number.innerText = i;
      const radius = 135;
      const x = 160 + radius * Math.sin(angle * Math.PI / 180);
      const y = 160 - radius * Math.cos(angle * Math.PI / 180);
      number.style.left = `${x}px`;
      number.style.top = `${y}px`;
      clock.appendChild(number);
    }

    function updateClock() {
      const now = new Date();
      const second = now.getSeconds();
      const minute = now.getMinutes();
      const hour = now.getHours();

      document.getElementById('second').style.transform =
        `rotate(${second * 6}deg)`;
      document.getElementById('minute').style.transform =
        `rotate(${minute * 6 + second * 0.1}deg)`;
      document.getElementById('hour').style.transform =
        `rotate(${hour * 30 + minute * 0.5}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();