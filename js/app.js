const fetchData = async () => {
  let response = await fetch("./data.json"); // Lấy dữ liệu từ data.json
  let data = await response.json(); // Phân tích dữ liệu JSON

  let courseList = document.querySelector("#course-list"); // Chọn phần tử HTML cho danh sách khóa học
  courseList.innerHTML = data
    .map((item) => {
      // Duyệt qua dữ liệu để tạo mã HTML
      return `   <h2>${item.title}</h2>  
    <p>${item.description}</p> 
        `;
    })
    .join(""); // Kết hợp tất cả các phần tử HTML thành một chuỗi
};

fetchData(); // Gọi hàm fetchData
