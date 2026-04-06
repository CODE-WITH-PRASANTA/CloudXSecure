import React from "react";
import "./Backup.css";
import BackupBD from "../../Component/BackupBD/BackupBD";
import BackupCont from "../../Component/BackupCont/BackupCont";
import BackupSidebar from "../../Component/BackupSidebar/BackupSidebar";



const Backup = () => {
  return (
    <section className="backup-recovery">
     <BackupBD/>
      <div className="backup-recovery__container">
        <div className="backup-recovery__grid">
          
          {/* LEFT */}
          <div className="backup-recovery__left">
           <BackupCont/>
          </div>

          {/* RIGHT */}
          <div className="backup-recovery__right">
            <BackupSidebar/>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default Backup;