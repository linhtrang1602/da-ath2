import { useMemo } from "react";
import Property1Variant3 from "./Property1Variant3";
import styles from "./Property1Default2.module.css";

const Property1Default2 = ({
  phphoneLight,
  iconoirdiscord,
  phphoneLight1,
  iconoirdiscord1,
  phphoneLight2,
  iconoirdiscord2,
  phphoneLight3,
  iconoirdiscord3,
  phphoneLight4,
  iconoirdiscord4,
  phphoneLight5,
  iconoirdiscord5,
  property1DefaultFlexShrink,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      flexShrink: property1DefaultFlexShrink,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultFlexShrink,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  return (
    <div className={styles.property1default} style={property1Default1Style} data-scroll-to='contactContainer'>
      <img className={styles.memberin4} alt="" src="/member.jpg" />
    </div>
    //   <div className={styles.groupMember}>
    //     <div className={styles.memberssProfile}>
    //       <div className={styles.ellipseParent}>
    //         <img className={styles.frameChild} alt="" src="/ellipse-4@2x.png" />
    //         <div className={styles.trnhThNgcAnhParent}>
    //           <div className={styles.trnhThNgc}>Trịnh Thị Ngọc Anh</div>
    //           <div className={styles.frameParent}>
    //             <div className={styles.fluentmail16RegularParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src="/fluentmail16regular.svg"
    //               />
    //               <div
    //                 className={styles.ngocem0601gmailcom}
    //               >{` ngocem0601@gmail.com `}</div>
    //             </div>
    //             <div className={styles.phphoneLightParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={phphoneLight}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>0379283355</div>
    //             </div>
    //             <div className={styles.iconoirdiscordParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={iconoirdiscord}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 ngocanhtrinh_54224
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Property1Variant3
    //         group1="/group-12.svg"
    //         property1Variant3Position="absolute"
    //         property1Variant3Top="483px"
    //         property1Variant3Left="calc(50% - 16px)"
    //       />
    //     </div>
    //     <div className={styles.memberssProfile1}>
    //       <div className={styles.ellipseParent}>
    //         <img className={styles.frameChild} alt="" src="/ellipse-4@2x.png" />
    //         <div className={styles.trnhThNgcAnhParent}>
    //           <div className={styles.trnhThNgc}>Trịnh Thị Ngọc Anh</div>
    //           <div className={styles.frameParent}>
    //             <div className={styles.fluentmail16RegularParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src="/fluentmail16regular.svg"
    //               />
    //               <div
    //                 className={styles.ngocem0601gmailcom}
    //               >{` ngocem0601@gmail.com `}</div>
    //             </div>
    //             <div className={styles.phphoneLightParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={phphoneLight1}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>0379283355</div>
    //             </div>
    //             <div className={styles.iconoirdiscordParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={iconoirdiscord1}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 ngocanhtrinh_54224
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Property1Variant3
    //         group1="/group-12.svg"
    //         property1Variant3Position="absolute"
    //         property1Variant3Top="483px"
    //         property1Variant3Left="calc(50% - 16px)"
    //       />
    //     </div>
    //     <div className={styles.memberssProfile2}>
    //       <div className={styles.ellipseContainer}>
    //         <img
    //           className={styles.frameChild}
    //           alt=""
    //           src="/ellipse-41@2x.png"
    //         />
    //         <div className={styles.trnhThNgcAnhParent}>
    //           <div className={styles.trnhThNgc}>Nguyễn Linh Trang</div>
    //           <div className={styles.frameParent}>
    //             <div className={styles.fluentmail16RegularParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src="/fluentmail16regular1.svg"
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 linhtrang1602.hust@gmail.com
    //               </div>
    //             </div>
    //             <div className={styles.phphoneLightParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={phphoneLight2}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>0966521454</div>
    //             </div>
    //             <div className={styles.iconoirdiscordParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={iconoirdiscord2}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>linhtrang1602</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Property1Variant3
    //         group1="/group-11.svg"
    //         property1Variant3Position="absolute"
    //         property1Variant3Top="483px"
    //         property1Variant3Left="calc(50% - 16px)"
    //       />
    //     </div>
    //     <div className={styles.memberssProfile3}>
    //       <div className={styles.frameDiv}>
    //         <img
    //           className={styles.frameChild}
    //           alt=""
    //           src="/ellipse-42@2x.png"
    //         />
    //         <div className={styles.trnhThNgcAnhParent}>
    //           <div className={styles.trnhThNgc}>Nguyễn Thị Phương Dung</div>
    //           <div className={styles.frameParent}>
    //             <div className={styles.fluentmail16RegularParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src="/fluentmail16regular1.svg"
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 nguyendung15102k1@gmail.com
    //               </div>
    //             </div>
    //             <div className={styles.phphoneLightParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={phphoneLight3}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>0965272813</div>
    //             </div>
    //             <div className={styles.iconoirdiscordParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={iconoirdiscord3}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 phuongdung1001
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Property1Variant3
    //         group1="/group-11.svg"
    //         property1Variant3Position="absolute"
    //         property1Variant3Top="483px"
    //         property1Variant3Left="calc(50% - 16px)"
    //       />
    //     </div>
    //     <div className={styles.memberssProfile4}>
    //       <div className={styles.ellipseParent1}>
    //         <img
    //           className={styles.frameChild}
    //           alt=""
    //           src="/ellipse-43@2x.png"
    //         />
    //         <div className={styles.trnhThNgcAnhParent}>
    //           <div className={styles.trnhThNgc}>Vũ Quỳnh Anh</div>
    //           <div className={styles.frameParent}>
    //             <div className={styles.fluentmail16RegularParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src="/fluentmail16regular1.svg"
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 quynhanhvu112@gmail.com
    //               </div>
    //             </div>
    //             <div className={styles.phphoneLightParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={phphoneLight4}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>0974848627</div>
    //             </div>
    //             <div className={styles.iconoirdiscordParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={iconoirdiscord4}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>qanhb</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Property1Variant3
    //         group1="/group-11.svg"
    //         property1Variant3Position="absolute"
    //         property1Variant3Top="483px"
    //         property1Variant3Left="calc(50% - 16px)"
    //       />
    //     </div>
    //     <div className={styles.memberssProfile5}>
    //       <div className={styles.ellipseParent2}>
    //         <img
    //           className={styles.frameChild}
    //           alt=""
    //           src="/ellipse-44@2x.png"
    //         />
    //         <div className={styles.trnhThNgcAnhParent}>
    //           <div className={styles.trnhThNgc}>Lê Phương Hoa</div>
    //           <div className={styles.frameParent}>
    //             <div className={styles.fluentmail16RegularParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src="/fluentmail16regular1.svg"
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 lephuonghoa173@gmail.com
    //               </div>
    //             </div>
    //             <div className={styles.phphoneLightParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={phphoneLight5}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>0776214427</div>
    //             </div>
    //             <div className={styles.iconoirdiscordParent}>
    //               <img
    //                 className={styles.fluentmail16RegularIcon}
    //                 alt=""
    //                 src={iconoirdiscord5}
    //               />
    //               <div className={styles.ngocem0601gmailcom}>
    //                 phuonghoa_52492
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Property1Variant3
    //         group1="/group-1.svg"
    //         property1Variant3Position="absolute"
    //         property1Variant3Top="483px"
    //         property1Variant3Left="calc(50% - 16px)"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Property1Default2;
