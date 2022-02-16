// Bài 1: xét tuyển
// nhập vào: điểm 3 môn, diểm chuẩn, khu vực ,đối tượng ưu tiên
//xuất ra: diểm tổng và két quả xét tuyển
// các bước làm:
// DOM vào phần tử form chứa bài toán và viết sự kiệm xảy ra khi submit
document.getElementById('xetTuyen').onsubmit = function(evt){
    // ngăn chặn load lại trang khi submit
    evt.preventDefault();
    //DOM vào các phần tử html chứ value cần thiết cho bài toán
    const diemChuan = +evt.target.elements.diemChuan.value;
    // console.log(diemChuan);
    const diemToan = +evt.target.elements.diemToan.value;
    const diemLy = +evt.target.elements.diemLy.value;
    const diemHoa = +evt.target.elements.diemHoa.value;
    // tạo biến chứa tổng diểm 3 môn của thí sinh
    let sum = diemToan + diemLy + diemHoa;
    // tạo biến hứng kết quả sau khi sử dụng hàm cộng thêm điểm cộng khu vực
    const number1 = pickArea(sum);
    // tạo biến chứa kết quả tổng điểm sau khi sử dụng hàm cộng thêm điểm cộng đối tượng ưu tiên
    const diemTong = pickType(number1);
    //tạo biến chứa kết quả của hàm xét kết quả xét tuyển của thí sinh
    const ketQua = result(diemToan,diemLy,diemHoa,diemChuan,diemTong);
    // hiển thị điểm tổng và kết quả ra màn hình
    displayResult(diemTong,ketQua)

}
// hàm xét điểm cộng khu vực của thí sinh 
function pickArea(sum) {
    // const kvX = document.getElementById('kvX')
    //DOM vào các ô input radio chứa nội dung các khu vực ưu tiên cộng điẻm
    const kvA = document.getElementById('kvA')
    const kvB = document.getElementById('kvB')
    const kvC = document.getElementById('kvC')
    // console.log(kvX.checked)
    // xét các điều kiện khi người dùng chọn vào các ô input khu vực ưu tiên và trả ra kết quả theo từng điều kiện
    if(kvA.checked){
        return sum+= 2
    }
    if(kvB.checked){
        return sum+= 1
    }
    if(kvC.checked){
        return sum+= 0.5
    }
    return sum;
};
// hàm xét điểm cộng cho các đối tượng ưu tiên
function pickType(sum){
    // const dt0 = document.getElementById('dt0')

    // DOM vào các ô input radio phần xét đối tượng ưu tiên
    const dt1 = document.getElementById('dt1')
    const dt2 = document.getElementById('dt2')
    const dt3 = document.getElementById('dt3')
    // với mỗi ô được checked thì điểm ưu tiên sẽ đc tính khác nhau theo công thức cho sẵn 
    if(dt1.checked){
        return sum+= 2.5
    }
    if(dt2.checked){
        return sum+= 1.5
    }
    if(dt3.checked){
        return sum+= 1
    }
    return sum;
}
//  xét đậu, rớt
function result(toan,ly,hoa,diemChuan,diemTong){
    //xét điều kiện thí sinh đậu
    if(diemTong>=diemChuan && toan!==0 && ly!==0 && hoa!==0){
        return "Pass"
    }
    //thí sinh ko thỏa 1 điều kiện sẽ rớt
    return 'Failed'
}

//hiện thi ra màn hình
function displayResult(diemTong,ketQua){
    // DOM vào 2 phần tử html chứa kết quả
    const diemTongEl = document.getElementById('diemTong');
    const ketQuaEl = document.getElementById('ketQua');
    //thay đổi nội dung khi nhấn vào button
    diemTongEl.innerHTML=`Điểm tổng: ${diemTong}`;  
    ketQuaEl.innerHTML = `Kết quả: ${ketQua}`;

}
// pickArea();


///////////////////////////////////////////////////////////////////////////

// bài 2: bài tập tính tiền điện

// nhập vào: tên chủ hộ, số kw
// xuất ra: tên chủ hộ, số tiền phải thanh toán

//các bước thực hiện
//DOM vào form chứa thông tin chứa người dùng nhập vào và viết các sự kiện khi người dùng submit
document.getElementById('tinhTienDien').onsubmit = function(evt){
    //ngăn chặn load lại trang khi onsubmit
    evt.preventDefault();
    // DOM vào và lấy các giá trị người dùng nhập vào
    const nameEl = evt.target.elements.name.value;
    const numberEl = +evt.target.elements.number.value;
    // tạo biến chứa kết quả tiền điện 
    let result = 0;
    // dựa vào số liệu và viết ra công thức trong từng trường hợp
    if(numberEl<=50){
         result = numberEl*500
    }else if(numberEl<=100){
         result = 50*500+(numberEl-50)*650
    }else if(numberEl<=200){
         result = 50*500+50*650+(numberEl-100)*850
    }else if(numberEl<=350){
         result = 50*500+(50)*650+100*850+(numberEl-200)*1100
    }else{
         result = 50*500+(50)*650+100*850+(150)*1100+(numberEl-350)*1300
    }
    // DOM vào các phần tử html hiển thị kết quả và thay đổi nội dung 
    document.getElementById('ten').innerHTML = `chủ hộ : ${nameEl} `;
    document.getElementById('result').innerHTML = `tổng cộng: ${result}` 
}