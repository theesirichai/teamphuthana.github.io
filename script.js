document.addEventListener('DOMContentLoaded', () => {
    // โค้ดสำหรับ animate-on-scroll ที่มีอยู่แล้ว
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));


    // โค้ดใหม่สำหรับเปลี่ยนรูปภาพพื้นหลังอัตโนมัติ
    const heroSection = document.getElementById('home');
    const images = [
        'picture/g1.jpg',
        'picture/g2.jpg',
        'picture/g3.jpg',
        'picture/g4.jpg',
        // เพิ่มที่อยู่รูปภาพของคุณที่นี่
    ];
    let currentIndex = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // เรียกใช้ฟังก์ชันครั้งแรก
    changeBackground();

    // ตั้งเวลาให้เปลี่ยนรูปภาพทุกๆ 5 วินาที (5000 มิลลิวินาที)
    setInterval(changeBackground, 5000);
});