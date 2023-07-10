import React, { ReactNode, useState } from "react";
import { Collapse } from "antd";
import styles from "./CustomCollapse.module.css";
interface CustomCollapseProps {
  label: ReactNode;
  children: ReactNode;
}

const CustomCollapse: React.FC<CustomCollapseProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapse
      onChange={(value) => setIsOpen(value?.length === 0)}
      style={{ width: "100%", backgroundColor: "none", border: "none" }}
      expandIcon={() => <div></div>}
    >
      
        <Collapse.Panel key="panel" header={label}>
          {children}
        </Collapse.Panel>
    
    </Collapse>
  );
};

export default CustomCollapse;
