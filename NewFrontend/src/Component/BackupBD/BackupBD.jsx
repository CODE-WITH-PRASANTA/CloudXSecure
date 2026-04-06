import React from "react";
import "./BackupBD.css";
import { FiChevronRight } from "react-icons/fi";
import breadcrumbBg from "../../assets/breadcumb-bg.png";

const BackupBD = () => {
  return (
    <section className="backup-recoveryBD">
      <div
        className="backup-recoveryBD__inner"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="backup-recoveryBD__overlay"></div>

        <div className="backup-recoveryBD__content">
          <h1 className="backup-recoveryBD__title">BACKUP & RECOVERY</h1>

          <div className="backup-recoveryBD__path">
            <span className="backup-recoveryBD__pathLink">HOME</span>
            <span className="backup-recoveryBD__pathIcon">
              <FiChevronRight />
            </span>
            <span className="backup-recoveryBD__pathActive">BACKUP & RECOVERY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackupBD;