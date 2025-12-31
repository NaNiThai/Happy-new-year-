    function updateCountdown() {
        const now = new Date();
        const nextYear = new Date(now.getFullYear() + 1, 0, 1);
        const timeRemaining = nextYear - now;
        const currentYear = new Date().getFullYear();

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining %     function updateCountdown() {
        const now = new Date();
        const nextYear = new Date(now.getFullYear() + 1, 0, 1);
        const timeRemaining = nextYear - now;
        const currentYear = new Date().getFullYear();

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById(
          "countdown"
        ).innerHTML = `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById("yearText").innerHTML = ` ${currentYear}`;
      }

      updateCountdown();

      setInterval(updateCountdown, 1000);(1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById(
          "countdown"
        ).innerHTML = `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById("yearText").innerHTML = ` ${currentYear}`;
      }

      updateCountdown();
