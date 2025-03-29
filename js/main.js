window.addEventListener("DOMContentLoaded", () => {
    const signinBtn = document.getElementById("dangxuat"); // Nút Sign in
    const signupBtn = document.getElementById("signup"); // Nút Sign up

    if (!signinBtn || !signupBtn) return; // Kiểm tra nếu phần tử không tồn tại để tránh lỗi

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        signinBtn.innerText = loggedInUser.name;
        signinBtn.href = "#";

        signupBtn.innerText = "Đăng xuất";
        signupBtn.href = "#";
        signupBtn.className = "btn dark btn-outline-danger";

        // Xử lý sự kiện đăng xuất
        signupBtn.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.removeItem("loggedInUser"); // Xóa dữ liệu đăng nhập
            location.reload(); // Tải lại trang để cập nhật giao diện
        });
    } else {
        // Khôi phục trạng thái ban đầu nếu không có người dùng đăng nhập
        signinBtn.innerText = "Sign in";
        signinBtn.href = "./trangdangnhap.html";

        signupBtn.innerText = "Sign up";
        signupBtn.href = "./trangdangky.html";
        signupBtn.className = "btn dark btn-outline-success";
    }
});
