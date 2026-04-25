// Tab 切换
function switchTab(btn, panelId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.form-panel').forEach(p => p.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById(panelId).classList.remove('hidden');
}

// 单选按钮（同组内互斥）
function selectRadio(btn) {
    const group = btn.closest('.radio-group');
    group.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// 日期选择（简单弹窗，可替换为日期组件）
function openDatePicker() {
    const date = prompt('请输入出生日期（格式：2024-01-01）');
    if (date) {
        const el = document.getElementById('dateText');
        if (el) el.textContent = date;
    }
}

// 功能卡片点击
function handleFeature(item) {
    const name = item.querySelector('.feature-name').textContent;
    handleSubmit(name);
}

// 提交
function handleSubmit(feature) {
    const activeTab = document.querySelector('.tab-btn.active').textContent;
    const msg = feature
        ? `您选择了「${feature}」功能，正在为您生成...`
        : `正在为您${activeTab}，请稍候...`;
    alert(msg);
    // 这里替换为实际的接口调用逻辑
}
