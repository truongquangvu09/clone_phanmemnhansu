import React from "react";

import { Pagination } from "antd";

const MyPagination = ({
  current,
  pageSize,
  total,
  onChange,

}: any) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}

    />
  );
};

export default MyPagination;
