// 设置当前年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 初始化AOS动画库
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });
    
    // 添加卡片动画效果
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
    });
});

// 添加收藏功能提示
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault(); // 阻止默认收藏行为
        
        // 创建提示元素
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <i class="bi bi-bookmark-check-fill"></i>
            <span>感谢收藏本站！</span>
        `;
        document.body.appendChild(toast);
        
        // 显示提示
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // 隐藏提示
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
});

// 为toast通知添加样式
const style = document.createElement('style');
style.textContent = `
    .toast-notification {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background-color: #333;
        color: white;
        padding: 12px 25px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast-notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .toast-notification i {
        margin-right: 10px;
        color: #4caf50;
    }
`;
document.head.appendChild(style);
