import React from "react";
import style from "./certificate.module.css";

function CertificateNew({image}) {
  return (
    <>
      <div class={style["container"]}>
        <div class={style["card"]}>
          <div class={style["image"]}>
            <img
              href="#"
              src={image}
            />
          </div>
          <div class={style["content"]}>
            <h2> Cal Art certificate</h2>
            <p>
            It is the formal attestation or confirmation of certain
            characteristics of an object, person, or organization. This
            confirmation is often, but not always, provided by some form of
            external review, education, assessment, or audit. Accreditation is a
            specific organization's process of certification.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateNew;
