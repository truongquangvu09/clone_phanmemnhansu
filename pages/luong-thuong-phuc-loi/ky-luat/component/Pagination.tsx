import React from "react";

import { Pagination } from "antd";

const MyPagination = ({
  current,
  pageSize,
  total,
  onChange,
  onShowSizeChange,
}: any) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      onShowSizeChange={onShowSizeChange}
    />
  );
};

export default MyPagination;
