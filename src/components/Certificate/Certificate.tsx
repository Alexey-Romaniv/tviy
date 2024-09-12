"use client";
import React, { useState } from "react";
import styles from "@/styles/Certificate/Certificate.module.scss";
import CertificateModal from "./CertificateModal";

const Certificate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.certificate__button}
      >
        Переглянути всі дипломи
      </button>
      <CertificateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Certificate;
