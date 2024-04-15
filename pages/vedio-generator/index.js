import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import RightpanelDashboard from "@/components/Common/RightpanelDashboard";
import Modal from "@/components/Common/Modal";
import StaticbarDashboard from "@/components/Common/StaticbarDashboard";
import VedioGenerator from "@/components/VedioGenerator/VedioGenerator";

const VedioGeneratorPage = () => {
  return (
    <>
      <PageHead title="Vedio Generator" />

      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="" />
            <PopupMobileMenu />
            <LeftpanelDashboard />
            <RightpanelDashboard />
            <Modal />

            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    <VedioGenerator />
                  </div>
                  <StaticbarDashboard />
                </div>
              </div>
            </div>
          </div>
        </Context>
      </main>
    </>
  );
};

export default VedioGeneratorPage;
