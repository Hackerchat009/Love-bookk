const buttonClickSound = new Audio('click.mp3'); // ไฟล์เสียงเมื่อกดปุ่ม

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    buttonClickSound.play(); // เล่นเสียงเมื่อกดปุ่ม
    currentPage--;
    updateBook();
  } else {
    alert('นี่คือหน้าแรกแล้วนะ 😊'); // แจ้งเตือนเมื่อย้อนกลับไม่ได้
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length) {
    buttonClickSound.play();
    currentPage++;
    if (currentPage === 2) {
      backgroundMusic.play();
      setTimeout(() => backgroundMusic.pause(), 30000); // ปิดเสียงเพลงอัตโนมัติหลัง 30 วินาที
    }
    updateBook();
  } else {
    alert('นี่คือหน้าสุดท้ายแล้ว 🎉');
  }
});
