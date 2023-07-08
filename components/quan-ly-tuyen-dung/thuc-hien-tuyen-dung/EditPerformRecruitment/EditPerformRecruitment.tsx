import React, { useState } from "react";
import styles from "./EditPerformRecruitment.module.css";
import Select from "react-select";
export interface EditPerformRecruitment {}

type SelectOptionType = { label: string; value: string };

export default function EditPerformRecruitment({ animation, handleCloseModalAdd }: any) {
  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
    null
  );

  const handleSelectionChange = (
    option: SelectOptionType | null,
    optionsArray: SelectOptionType[]
  ) => {
    if (option) {
      setSelectedOption(option);
    }
  };
  const handleSubmit = () => {};

  const options = {
    vitrituyendung: [
      { value: "Mới tốt nghiệp", label: "Mới tốt nghiệp" },
      { value: "Thực tập sinh", label: "Thực tập sinh" },
      { value: "Nhân viên", label: "Nhân viên" },
      { value: "Trưởng phòng", label: "Trưởng phòng" },
    ],
    diaiemlamviec: [
      { value: "An Giang", label: "An Giang" },
      { value: "Bà Rịa Vũng Tàu", label: "Bà Rịa Vũng Tàu" },
      { value: "Bạc Liêu", label: "Bạc Liêu" },
      { value: "Bắc Giang", label: "Bắc Giang" },
      { value: "Bắc Kạn", label: "Bắc Kạn" },
      { value: "Bến Tre", label: "Bến Tre" },
      { value: "Bình Dương", label: "Bình Dương" },
      { value: "Bình Định", label: "Bình Định" },
      { value: "Bình Phước", label: "Bình Phước" },
      { value: "Bình Thuận", label: "Bình Thuận" },
      { value: "Cà Mau", label: "Cà Mau" },
      { value: "Cần Thơ", label: "Cần Thơ" },
      { value: "Cao Bằng", label: "Cao Bằng" },
      { value: "Đà Nẵng", label: "Đà Nẵng" },
      { value: "Đắk Lắk", label: "Đắk Lắk" },
      { value: "Đắk Nông", label: "Đắk Nông" },
      { value: "Điện Biên", label: "Điện Biên" },
      { value: "Đồng Nai", label: "Đồng Nai" },
      { value: "Đồng Tháp", label: "Đồng Tháp" },
      { value: "Gia Lai", label: "Gia Lai" },
      { value: "Hà Giang", label: "Hà Giang" },
      { value: "Hà Nam", label: "Hà Nam" },
      { value: "Hà Nội", label: "Hà Nội" },
      { value: "Hà Tĩnh", label: "Hà Tĩnh" },
      { value: "Hải Dương", label: "Hải Dương" },
      { value: "Hải Phòng", label: "Hải Phòng" },
      { value: "Hậu Giang", label: "Hậu Giang" },
      { value: "Hòa Bình", label: "Hòa Bình" },
      { value: "Hưng Yên", label: "Hưng Yên" },
      { value: "Khánh Hòa", label: "Khánh Hòa" },
      { value: "Kiên Giang", label: "Kiên Giang" },
      { value: "Kon Tum", label: "Kon Tum" },
      { value: "Lai Châu", label: "Lai Châu" },
      { value: "Lâm Đồng", label: "Lâm Đồng" },
      { value: "Lạng Sơn", label: "Lạng Sơn" },
      { value: "Lào Cai", label: "Lào Cai" },
      { value: "Long An", label: "Long An" },
      { value: "Nam Định", label: "Nam Định" },
      { value: "Nghệ An", label: "Nghệ An" },
      { value: "Ninh Bình", label: "Ninh Bình" },
      { value: "Ninh Thuận", label: "Ninh Thuận" },
      { value: "Phú Thọ", label: "Phú Thọ" },
      { value: "Phú Yên", label: "Phú Yên" },
      { value: "Quảng Bình", label: "Quảng Bình" },
      { value: "Quảng Nam", label: "Quảng Nam" },
      { value: "Quảng Ngãi", label: "Quảng Ngãi" },
      { value: "Quảng Ninh", label: "Quảng Ninh" },
      { value: "Quảng Trị", label: "Quảng Trị" },
      { value: "Sóc Trăng", label: "Sóc Trăng" },
      { value: "Sơn La", label: "Sơn La" },
      { value: "Tây Ninh", label: "Tây Ninh" },
      { value: "Thái Bình", label: "Thái Bình" },
      { value: "Thái Nguyên", label: "Thái Nguyên" },
      { value: "Thanh Hóa", label: "Thanh Hóa" },
      { value: "Thừa Thiên Huế", label: "Thừa Thiên Huế" },
      { value: "Tiền Giang", label: "Tiền Giang" },
      { value: "TP Hồ Chí Minh", label: "TP Hồ Chí Minh" },
      { value: "Trà Vinh", label: "Trà Vinh" },
      { value: "Tuyên Quang", label: "Tuyên Quang" },
      { value: "Vĩnh Long", label: "Vĩnh Long" },
      { value: "Vĩnh Phúc", label: "Vĩnh Phúc" },
      { value: "Yên Bái", label: "Yên Bái" },
    ],
    nganhnghe: [
      { value: " Kế toán - Kiểm toán ", label: "Kế toán - Kiểm toán " },
      { value: " Hành chính - Văn phòng ", label: " Hành chính - Văn phòng " },
      { value: " Việc làm thời vụ ", label: " Việc làm thời vụ " },
      { value: " Sinh viên làm thêm ", label: " Sinh viên làm thêm " },
      { value: " Xây dựng ", label: " Xây dựng " },
      { value: " Điện - Điện tử ", label: " Điện - Điện tử " },
      { value: " Làm bán thời gian ", label: " Làm bán thời gian " },
      { value: " Vận tải - Lái xe ", label: "Vận tải - Lái xe  " },
      { value: " Khách sạn - Nhà hàng ", label: " Khách sạn - Nhà hàng  " },
      { value: " Nhân viên kinh doanh ", label: " Nhân viên kinh doanh " },
      { value: " Việc làm bán hàng ", label: "Việc làm bán hàng  " },
      { value: " Cơ khí - chế tạo ", label: " Cơ khí - chế tạo  " },
      { value: " Lao động phổ thông ", label: "Lao động phổ thông  " },
      { value: " Marketing - PR ", label: " Marketing - PR " },
      { value: " Nhập liệu", label: "Nhập liệu  " },
      { value: " Giáo dục - Đào tạo", label: " Giáo dục - Đào tạo " },
      { value: " Kỹ thuật ", label: " Kỹ thuật " },
      { value: " Y tế - Dược ", label: "Y tế - Dược  " },
      { value: " Quản trị kinh doanh ", label: " Quản trị kinh doanh " },
      { value: " Dịch vụ ", label: " Dịch vụ " },
      { value: " Biên - Phiên dịch ", label: " Biên - Phiên dịch " },
      { value: " Dệt may - Da giày", label: "Dệt may - Da giày  " },
      { value: " Tìm việc làm thêm ", label: "  Tìm việc làm thêm " },
      {
        value: " Kiến trúc - Tk nội thất ",
        label: " Kiến trúc - Tk nội thất ",
      },
      { value: " Xuất - nhập khẩu ", label: " Xuất - nhập khẩu " },
      { value: " IT Phần cứng - mạng ", label: " IT Phần cứng - mạng  " },
      { value: " Nhân sự ", label: " Nhân sự  " },
      { value: " Thiết kế - Mỹ thuật ", label: "Thiết kế - Mỹ thuật " },
      { value: " Bảo vệ ", label: " Bảo vệ " },
      { value: " Ô tô - xe máy ", label: "Ô tô - xe máy  " },
      { value: " Thư ký - Trợ lý ", label: " Thư ký - Trợ lý " },
      { value: " KD bất động sản ", label: " KD bất động sản " },
      { value: " Du lịch ", label: " Du lịch " },
      { value: " Báo chí - Truyền hình ", label: " Báo chí - Truyền hình " },
      { value: " Thực phẩm - Đồ uống ", label: " Thực phẩm - Đồ uống " },
      { value: " Ngành nghề khác ", label: " Ngành nghề khác " },
      { value: " Vật tư - Thiết bị ", label: " Vật tư - Thiết bị " },
      { value: " Thiết kế web ", label: " Thiết kế web   " },
      { value: " In ấn - Xuất bản ", label: " In ấn - Xuất bản  " },
      {
        value: " Nông - Lâm - Ngư - Nghiệp ",
        label: " Nông - Lâm - Ngư - Nghiệp  ",
      },
      { value: " Việc làm thêm tại nhà ", label: "  Việc làm thêm tại nhà " },
      { value: " Chăm sóc khách hàng ", label: " Chăm sóc khách hàng  " },
      {
        value: " Sinh viên mới tốt nghiệp - Thực tập ",
        label: " Sinh viên mới tốt nghiệp - Thực tập ",
      },
      { value: " Kỹ thuật ứng dụng ", label: "Kỹ thuật ứng dụng  " },
      { value: " Bưu chính viễn thông ", label: " Bưu chính viễn thông  " },
      { value: " Dầu khí - Địa chất ", label: " Dầu khí - Địa chất " },
      {
        value: " Giao thông vận tải - Thủy lợi - Cầu đường",
        label: " Giao thông vận tải - Thủy lợi - Cầu đường ",
      },
      {
        value: " Khu chế xuất - Khu công nghiệp ",
        label: " Khu chế xuất - Khu công nghiệp  ",
      },
      {
        value: " Làm đẹp - Thể lực - Spa ",
        label: "Làm đẹp - Thể lực - Spa  ",
      },
      { value: " Luật - Pháp lý ", label: " Luật - Pháp lý " },
      {
        value: " Môi trường - Xử lý chất thải ",
        label: "Môi trường - Xử lý chất thải  ",
      },
      {
        value: " Mỹ phẩm - Thời trang - Trang sức ",
        label: "Mỹ phẩm - Thời trang - Trang sức  ",
      },
      {
        value: " Ngân hàng - Chứng khoán - Đầu tư ",
        label: " Ngân hàng - Chứng khoán - Đầu tư  ",
      },
      { value: " Nghệ thuật - Điện ảnh ", label: "Nghệ thuật - Điện ảnh  " },
      { value: " Phát triển thị trường ", label: "Phát triển thị trường  " },
      { value: " Phục vụ - Tạp vụ ", label: " Phục vụ - Tạp vụ " },
      { value: " Quan hệ đối ngoại", label: "Quan hệ đối ngoại  " },
      { value: " Quản lý điều hành", label: "Quản lý điều hành  " },
      {
        value: " Sản xuất - Vận hành sản xuất",
        label: "Sản xuất - Vận hành sản xuất  ",
      },
      {
        value: " Thẩm định - Giám thẩm định - Quản lý chất lượng",
        label: " Thẩm định - Giám thẩm định - Quản lý chất lượng ",
      },
      { value: " Thể dục - Thể thao", label: " Thể dục - Thể thao " },
      { value: " Hóa học - Sinh học", label: "  Hóa học - Sinh học" },
      { value: " Bảo hiểm", label: " Bảo hiểm " },
      { value: " Freelancer", label: " Freelancer " },
      { value: " Công chức - Viên chức ", label: "Công chức - Viên chức  " },
      { value: " Điện tử viễn thông", label: " Điện tử viễn thông " },
      { value: " Hoạch định - Dự án", label: " Hoạch định - Dự án " },
      { value: " Lương cao", label: "Lương cao  " },
      { value: " Tiếp thị - Quảng cáo", label: "Tiếp thị - Quảng cáo  " },
      { value: " Việc làm Tết", label: " Việc làm Tết " },
      { value: " Giúp việc", label: " Giúp việc" },
      { value: " Thủy sản", label: " Thủy sản " },
      { value: " Công nghệ thực phẩm", label: " Công nghệ thực phẩm " },
      { value: " Chăn nuôi - Thú y", label: " Chăn nuôi - Thú y " },
      { value: " An toàn lao động", label: " An toàn lao động " },
      { value: " Hàng không", label: " Hàng không " },
      { value: " Tài chính", label: " Tài chính " },
      { value: " Tổ chức sự kiện", label: " Tổ chức sự kiện " },
      { value: " Trắc địa", label: " Trắc địa " },
      { value: " Bảo trì", label: " Bảo trì " },
      { value: " Hàng hải", label: " Hàng hải " },
      { value: " Đầu bếp - phụ bếp", label: "Đầu bếp - phụ bếp  " },
      { value: " Truyền thông", label: "  Truyền thông " },
      { value: " Startup", label: " Startup " },
      { value: " Thư viện", label: " Thư viện " },
      { value: " Thống kê", label: " Thống kê " },
      { value: " Copywriter", label: " Copywriter " },
      { value: " Xuất khẩu lao động", label: " Xuất khẩu lao động " },
      { value: " Công nghệ cao", label: " Công nghệ cao " },
      { value: " Pha chế - Bar", label: " Pha chế - Bar " },
      { value: " Lễ tân - PG - PB", label: " Lễ tân - PG - PB " },
      { value: " Logistic", label: " Logistic " },
      { value: " Vận chuyển giao nhận", label: " Vận chuyển giao nhận " },
      { value: " Quản lý đơn hàng", label: " Quản lý đơn hàng " },
      { value: " Thu ngân ", label: " Thu ngân " },
      { value: " Telesales", label: " Telesales " },
    ],
    mucluong: [
      { value: "Thỏa thuận", label: "Thỏa thuận" },
      { value: "1 - 3 triệu", label: "1 - 3 triệu" },
      { value: "3 - 5 triệu", label: "3 - 5 triệu" },
      { value: "5 - 7 triệu", label: "5 - 7 triệu" },
      { value: "7 - 10 triệu", label: "7 - 10 triệu" },
      { value: "10 - 15 triệu", label: "10 - 15 triệu" },
      { value: "15 - 20 triệu", label: "15 - 20 triệu" },
      { value: "20 - 30 triệu", label: "20 - 30 triệu" },
      { value: "Trên 30 triệu", label: "Trên 30 triệu" },
      { value: "Trên 50 Triệu", label: "Trên 50 Triệu" },
      { value: "Trên 100 Triệu", label: "Trên 100 Triệu" },
    ],
    hinhthuclamviec: [
      { value: "Toàn thời gian cố định", label: "Toàn thời gian cố định" },
      { value: "Toàn thời gian tạm thời", label: "Toàn thời gian tạm thời" },
      { value: "Bán thời gian", label: "Bán thời gian" },
      { value: "Bán thời gian tạm thời", label: "Bán thời gian tạm thời" },
      { value: "Hợp đồng", label: "Hợp đồng" },
      { value: "Khác", label: "Khác" },
    ],
    maquytrinhapdung: [
      { value: "QTVKDF_12", label: "QTVKDF_12" },
      { value: "Khác", label: "Khác" },
    ],
    kinhnghiem: [
      { value: "Chưa có kinh nghiệm", label: "Chưa có kinh nghiệm" },
      { value: "0 - 1 năm kinh nghiệm", label: "0 - 1 năm kinh nghiệm" },
      { value: "1 - 2 năm kinh nghiệm", label: "Khác" },
      { value: "2 - 5 năm kinh nghiệm", label: "2 - 5 năm kinh nghiệm" },
      { value: "5 - 10 năm kinh nghiệm", label: "5 - 10 năm kinh nghiệm" },
      { value: "Trên 10 năm kinh nghiệm", label: "Trên 10 năm kinh nghiệm" },
    ],
    gioitinh: [
      { value: "Nam", label: "Nam" },
      { value: "Nữ", label: "Nữ" },
      { value: "Không yêu cầu", label: "Không yêu cầu" },
    ],
    yeucaubangcap: [
      { value: "Đại học trở lên", label: "Đại học trở lên" },
      { value: "Cao đẳng trở lên", label: "Cao đẳng trở lên" },
      { value: "THPT trở lên", label: "THPT trở lên" },
      { value: "Trung học trở lên", label: "Trung học trở lên" },
      { value: "Chứng chỉ", label: "Chứng chỉ" },
      { value: "Trung cấp trở lên", label: "Trung cấp trở lên" },
      { value: "Cử nhân trở lên", label: "Cử nhân trở lên" },
      { value: "Thạc sĩ trở lên", label: "Thạc sĩ trở lên" },
      { value: "Thạc sĩ Nghệ thuật", label: "Thạc sĩ Nghệ thuật" },
      { value: "Thạc sĩ Thương mại", label: "Thạc sĩ Thương mại" },
      { value: "Thạc sĩ Khoa học", label: "Thạc sĩ Khoa học" },
      { value: "Thạc sĩ Kiến trúc", label: "Thạc sĩ Kiến trúc" },
      { value: "Thạc sĩ QTKD", label: "Thạc sĩ QTKD" },
      {
        value: "Thạc sĩ Kỹ thuật ứng dụng",
        label: "Thạc sĩ Kỹ thuật ứng dụng",
      },
      { value: "Thạc sĩ Y học", label: "Thạc sĩ Y học" },
      { value: "Thạc sĩ Dược phẩm", label: "Thạc sĩ Dược phẩm" },
      { value: "Tiến sĩ", label: "Tiến sĩ" },
      { value: "Khác", label: "Khác" },
    ],
    nhanvientheodoi: [
      { value: "Lê Hồng Anh", label: "Lê Hồng Anh (KỸ THUẬT - ID:284670)" },
      {
        value: "Phan Mạnh Hùng",
        label: "Phan Mạnh Hùng (SÁNG TẠO - ID:153846)",
      },
    ],
    nhanvienphutrach: [
      { value: "Lê Hồng Anh", label: "Lê Hồng Anh (KỸ THUẬT - ID:284670)" },
      {
        value: "Phan Mạnh Hùng",
        label: "Phan Mạnh Hùng (SÁNG TẠO - ID:153846)",
      },
    ],
  };

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting}  ${animation ? styles.fade_in : styles.fade_out }`} style={{display:'block'}}>
        <div className={` ${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>CHỈNH SỬA TIN</h5>
            </div>

            <form onSubmit={handleSubmit} className={`${styles.modal_form}`}>
              <div className={`${styles.modal_body} ${styles.bodytuyendung}`}>
                <div className={`${styles.form_groups}`}>
                  <label>
                  Tiêu đề tin tuyển dụng
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Nhập tiêu đề tin tuyển dụng"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_left}`}>
                  <label>
                    Vị trí tuyển dụng
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.vitrituyendung)
                      }
                      options={options.vitrituyendung}
                      placeholder="Cấp bậc - Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_right}`}>
                  <label>
                    Địa điểm làm việc
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>

                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.diaiemlamviec)
                      }
                      options={options.diaiemlamviec}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Địa chỉ tuyển dụng
                    <span className={`${styles.red}`}> </span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ tuyển dụng"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_left}`}>
                  <label>
                    Ngành nghề
                    <span className={`${styles.red}`}> </span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.nganhnghe)
                      }
                      options={options.nganhnghe}
                      placeholder="Cấp bậc - Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_right}`}>
                  <label>
                    Mức lương
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>

                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.mucluong)
                      }
                      options={options.mucluong}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.small_left}`}>
                  <label>
                    Số lượng ứng tuyển
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="number"
                      placeholder="Nhập số lượng ứng viên cần tuyển"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.big_right}`}>
                  <label>
                    Thời hạn tuyển
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                    style={{fontWeight:'600'}}
                      type="date"
                      className={`${styles.form_date}`}
                    ></input>
                    <span className={`${styles.formto}`}>đến</span>
                    <input type="date" className={`${styles.to_date}`} style={{fontWeight:'600'}}></input>
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Chi tiết công việc
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Mô tả chi tiết công việc"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_left}`}>
                  <label>
                    Hình thức làm việc
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.hinhthuclamviec)
                      }
                      options={options.hinhthuclamviec}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_right}`}>
                  <label>
                   Thời gian thử việc
                    <span className={`${styles.red}`}></span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                  <input
                      type="text"
                      placeholder="Nhập thời gian thử việc"
                      spellCheck="false"
                    />
                  </div>
                </div>
         
                <div className={`${styles.form_groups} ${styles.group_left}`} style={{width:'100%'}}>
                  <label>
                    Hoa hồng (nếu có)
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Nhập hoa hồng được nhận (nếu có)"
                      spellCheck="false"
                     
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Mô tả công việc
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Mô tả công việc"
                      spellCheck="false"
                    />
                  </div>
                </div>
             
                <div className={`${styles.form_groups}`}>
                  <label>
                    Quyền lợi
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Quyền lợi ứng viên"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_left}`}>
                  <label>
                    Mã quy trình áp dụng
                    <span className={`${styles.red}`}></span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.maquytrinhapdung)
                      }
                      options={options.maquytrinhapdung}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_right}`}>
                  <label>
                    Kinh nghiệm
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>

                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.kinhnghiem)
                      }
                      options={options.kinhnghiem}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_left}`}>
                  <label>
                    Yêu cầu giới tính
                    <span className={`${styles.red}`}></span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.gioitinh)
                      }
                      options={options.gioitinh}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} ${styles.group_right}`}>
                  <label>
                    Yêu cầu bằng cấp
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>

                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.yeucaubangcap)
                      }
                      options={options.yeucaubangcap}
                      placeholder="-- Vui lòng chọn --"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Yêu cầu công việc
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div className={`${styles.tuyendungtext}`}>
                    <input
                      type="text"
                      placeholder="Yêu cầu công việc"
                      spellCheck="false"
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups} `}>
                  <label>
                    Thành viên theo dõi
                    <span className={`${styles.red}`}></span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>

                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.nhanvientheodoi)
                      }
                      options={options.nhanvientheodoi}
                      placeholder="Chọn nhân viên"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Tên nhân viên phụ trách tuyển dụng
                    <span className={`${styles.red}`}></span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>

                  <div className={`${styles.tuyendungtext}`}>
                    <Select
                      className={`${styles.position_recruit}`}
                      defaultValue={selectedOption}
                      onChange={(option) =>
                        handleSelectionChange(option, options.nhanvienphutrach)
                      }
                      options={options.nhanvienphutrach}
                      placeholder="Chọn nhân viên"
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          height: 32,
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${styles.modal_footer} ${styles.footerquytrinh}`}
              >
                <button
                  type="button"
                  className={`${styles.btn_huy}`}
                  onClick={handleCloseModalAdd}
                >
                  Hủy
                </button>
                <button type="button" className={`${styles.update}`}>
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
