document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('msgCount').textContent = '124';
    document.getElementById('delCount').textContent = '7';
    document.getElementById('editCount').textContent = '3';
    document.getElementById('exportBtn').addEventListener('click', () => {
        alert('📦 Экспорт чата скоро будет доступен');
    });
});