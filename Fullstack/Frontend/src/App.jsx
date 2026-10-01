import React, { useEffect } from "react";
import "./App.css";

import {
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";

// =================================================
// COMMON COMPONENTS
// =================================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// =================================================
// HOME COMPONENTS
// =================================================
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";

// =================================================
// HERO SLIDE 1
// =================================================
import HeroSlide01 from "./components/HeroSlides/HeroSlide01.jsx";
import HeroSlide02 from "./components/HeroSlides/HeroSlide02.jsx";
import HeroSlide03 from "./components/HeroSlides/HeroSlide03.jsx";
import HeroSlide04 from "./components/HeroSlides/HeroSlide04.jsx";

// =================================================
// HERO SLIDE 2
// =================================================
import Hero02Slide01 from "./components/Hero2Slides/Hero02Slide01.jsx";
import Hero02Slide02 from "./components/Hero2Slides/Hero02Slide02.jsx";
import Hero02Slide03 from "./components/Hero2Slides/Hero02Slide03.jsx";
import Hero02Slide04 from "./components/Hero2Slides/Hero02Slide04.jsx";
import Hero02Slide05 from "./components/Hero2Slides/Hero02Slide05.jsx";
import Hero02Slide06 from "./components/Hero2Slides/Hero02Slide06.jsx";

// =================================================
// HERO SLIDE 3
// =================================================
import Hero03Slide01 from "./components/Hero3Slides/Hero03Slide01.jsx";
import Hero03Slide02 from "./components/Hero3Slides/Hero03Slide02.jsx";
import Hero03Slide03 from "./components/Hero3Slides/Hero03Slide03.jsx";
import Hero03Slide04 from "./components/Hero3Slides/Hero03Slide04.jsx";
import Hero03Slide05 from "./components/Hero3Slides/Hero03Slide05.jsx";
import Hero03Slide06 from "./components/Hero3Slides/Hero03Slide06.jsx";
import Hero03Slide07 from "./components/Hero3Slides/Hero03Slide07.jsx";

// =================================================
// HERO SLIDE 4
// =================================================
import Hero04Slide01 from "./components/Hero4Slides/Hero04Slide01.jsx";
import Hero04Slide02 from "./components/Hero4Slides/Hero04Slide02.jsx";
import Hero04Slide03 from "./components/Hero4Slides/Hero04Slide03.jsx";
import Hero04Slide04 from "./components/Hero4Slides/Hero04Slide04.jsx";
import Hero04Slide05 from "./components/Hero4Slides/Hero04Slide05.jsx";

// =================================================
// HERO SLIDE 5
// =================================================
import Hero05Slide01 from "./components/Hero5Slides/Hero05Slide01.jsx";
import Hero05Slide02 from "./components/Hero5Slides/Hero05Slide02.jsx";
import Hero05Slide03 from "./components/Hero5Slides/Hero05Slide03.jsx";
import Hero05Slide04 from "./components/Hero5Slides/Hero05Slide04.jsx";

// =================================================
// OUR STORY
// =================================================
import PhiosophySection from "./pages/OurStory/PhilosophySection.jsx";
import EnterpriseHero from "./pages/OurStory/EnterpriseReadiness.jsx";
import ScaleAtSpeed from "./pages/OurStory/ScaleAtSpeed.jsx";
import CoreFoundation from "./pages/OurStory/CoreFoundation.jsx";
import StrategicCapabilities from "./pages/OurStory/StrategicCapabilities.jsx";
import TransformationForm from "./pages/OurStory/TransformationForm.jsx";

// =================================================
// KNOW MORE
// =================================================
import EnterpriseAcceleration from "./pages/KnowMore/EnterpriseAcceleration.jsx";
import PracticalIntelligence from "./pages/KnowMore/PracticalIntelligence.jsx";
import ProvenImpact from "./pages/KnowMore/ProvenImpact.jsx";
import TransformationReady from "./pages/KnowMore/TransformationReady.jsx";

// =================================================
// TECHTORCH VIEW
// =================================================
import TechTorchView from "./pages/What'sNext/TechTorchView/TechTorchView.jsx";
import Philosophy from "./pages/What'sNext/TechTorchView/Philosophy.jsx";
import Capabilities from "./pages/What'sNext/TechTorchView/Capabilities.jsx";
import Methodology from "./pages/What'sNext/TechTorchView/DeploymentMethodology.jsx";
import ReadyScale from "./pages/What'sNext/TechTorchView/ReadyScale.jsx";

// =================================================
// FIELD NOTE
// =================================================
import Banner from "./pages/What'sNext/FieldNote/Banner.jsx";
import TechnologySection from "./pages/What'sNext/FieldNote/TechnologySection.jsx";
import ConnectSection from "./pages/What'sNext/FieldNote/ConnectSection.jsx";
import OperationalAdvantage from "./pages/What'sNext/FieldNote/OperationalAdvantage.jsx";
import IntegratedCapabilities from "./pages/What'sNext/FieldNote/IntegratedCapabilities.jsx";

// =================================================
// INTEGRATED CAPABILITIES
// =================================================
import IntegratedCapLayout from "./pages/What'sNext/FieldNote/IntegratedCapabilities/IntegratedCapLayout.jsx";
import ERPIntegration from "./pages/What'sNext/FieldNote/IntegratedCapabilities/ERPIntegration.jsx";
import OpManagement from "./pages/What'sNext/FieldNote/IntegratedCapabilities/OpManagement.jsx";
import DataOrchestration from "./pages/What'sNext/FieldNote/IntegratedCapabilities/DataOrchestration.jsx";
import Legacy from "./pages/What'sNext/FieldNote/IntegratedCapabilities/Legacy.jsx";

// =================================================
// THINK AHEAD
// =================================================
import ReadSection from "./pages/What'sNext/ThinkAhead/ReadSection.jsx";
import Technologyarticlesection from "./pages/What'sNext/ThinkAhead/Technologyarticlesection.jsx";
import EcosystemHeroSection from "./pages/What'sNext/ThinkAhead/Ecosystem.jsx";
import PerspectiveSection from "./pages/What'sNext/ThinkAhead/Perspectivesection.jsx";

// =================================================
// CYBER SECURITY
// =================================================
import WhatsNextSection from "./pages/What'sNext/CyberSecurity/WhatNextSection.jsx";
import CyberSecurityHeroSection from "./pages/What'sNext/CyberSecurity/CyberSecurityHeroSection.jsx";
import SecurityCapabilitiesSection from "./pages/What'sNext/CyberSecurity/SecurityCapabilities.jsx";
import ResiliencePillarsSection from "./pages/What'sNext/CyberSecurity/Resiliencepillarssection.jsx";
import SecurityOutcomes from "./pages/What'sNext/CyberSecurity/SecurityOutcomes.jsx";
import SecurityPerspectiveSection from "./pages/What'sNext/CyberSecurity/Securityperspectivesection.jsx";
import AboutSecurity from "./pages/What'sNext/CyberSecurity/AboutSecurity.jsx";
import SecurityChallenge from "./pages/What'sNext/CyberSecurity/SecurityChallenge.jsx";
import EditorialReflection from "./pages/What'sNext/CyberSecurity/EditorialReflection.jsx";
import OurApproach from "./pages/What'sNext/CyberSecurity/OurApproach.jsx";
import WhyTechtorch from "./pages/What'sNext/CyberSecurity/WhyTechtorch.jsx";

// =================================================
// SECURE BUSINESS
// =================================================
import SecurityInitiative from "./pages/What'sNext/CyberSecurity/SecureBusiness/SecurityInitiative.jsx";
import ProtocolDelivery from "./pages/What'sNext/CyberSecurity/SecureBusiness/ProtocolDelivery.jsx";
import SelectionEngine from "./pages/What'sNext/CyberSecurity/SecureBusiness/SelectionEngine.jsx";
import AdvisoryFramework from "./pages/What'sNext/CyberSecurity/SecureBusiness/AdvisoryFramework.jsx";

// =================================================
// ENGAGEMENT PROTOCOL
// =================================================
import ViewEngagementProtocol from "./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/ViewEngagementProtocol.jsx";
import AcceptProceed from "./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/AcceptProceed.jsx";
import ExportProtocolPackage from "./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/ExportProtocolPackage.jsx";

// =================================================
// SCHEDULE ADVISORY
// =================================================
import AdvisoryDesk from "./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/AdvisoryDesk";
import DispatchConsole from "./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/DispatchConsole.jsx";
import TimeboxProtocol from "./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/TimeboxProtocol.jsx";

// =================================================
// BUSINESS GROWTH
// =================================================
import GrowWithBusinessSection from "./pages/What'sNext/BusinessGrowth/GrowwTechnology.jsx";
import PurspectiveSection from "./pages/What'sNext/BusinessGrowth/PurspectiveSection.jsx";
import ArchitectureSection from "./pages/What'sNext/BusinessGrowth/ArchitectureSection.jsx";
import MethodologySection from "./pages/What'sNext/BusinessGrowth/MethodologySection.jsx";
import EcosystemCapabilitiesSection from "./pages/What'sNext/BusinessGrowth/EcosystemCapabilities.jsx";
import TechnologyCapabilities from "./pages/What'sNext/BusinessGrowth/TechnologyCapabilties.jsx";
import CoreEngineering from "./pages/What'sNext/BusinessGrowth/CoreEngineering.jsx";
import MarketExpertiseSection from "./pages/What'sNext/BusinessGrowth/MarketExpertise.jsx";
import InstitutionalCommitmentSection from "./pages/What'sNext/BusinessGrowth/InstitutionalCommitment.jsx";
import ParadigmSection from "./pages/What'sNext/BusinessGrowth/ParadigmSection.jsx";

// =================================================
// TECH PULSE
// =================================================
import DataDecisions from "./pages/What'sNext/TechPulse/DataDecisions.jsx";
import PerspectiveAnalysis from "./pages/What'sNext/TechPulse/PerspectiveAnalysis.jsx";
import StrategicInquiry from "./pages/What'sNext/TechPulse/StrategicInquiry.jsx";
import StructuredMethodology from "./pages/What'sNext/TechPulse/StructuredMethodology.jsx";
import OperationalImpact from "./pages/What'sNext/TechPulse/OperationalImpact.jsx";
import Automation from "./pages/What'sNext/TechPulse/Automation.jsx";
import CrossFunctional from "./pages/What'sNext/TechPulse/CrossFunctional.jsx";
import Discipline from "./pages/What'sNext/TechPulse/Discipline.jsx";
import ExecutiveStrategy from "./pages/What'sNext/TechPulse/ExecutiveStrategy.jsx";

// =================================================
// TECH PULSE - DIGITAL SOLUTIONS
// =================================================
import EnterpriseSolution from "./pages/What'sNext/TechPulse/DigitalSolution/Enterprisesolution.jsx";
import SystemicAgility from "./pages/What'sNext/TechPulse/DigitalSolution/SystemicAgility.jsx";
import ArchitectureLifecycle from "./pages/What'sNext/TechPulse/DigitalSolution/ArchitectureLifecycle.jsx";
import ValidatedSystems from "./pages/What'sNext/TechPulse/DigitalSolution/ValidatedSystem.jsx";

// =================================================
// CAPABILITIES - PLATFORM
// =================================================
import Businessplatformshero from "./pages/Capabilities/Platform/Businessplatformshero.jsx";
import OurAproach from "./pages/Capabilities/Platform/OurAproach.jsx";
import OurPlatforms from "./pages/Capabilities/Platform/OurPlatforms.jsx";
import TechTorchPlatform from "./pages/Capabilities/Platform/TechTorchPlatform.jsx";
import DirectEnterprise from "./pages/Capabilities/Platform/DirectEnterprise.jsx";

// =================================================
// CAPABILITIES - DIGITAL SOLUTIONS
// =================================================
import DigitalSolutionHero from "./pages/Capabilities/DigitalSolution/DigitalSolutionHero.jsx";
import DigitalTransformation from "./pages/Capabilities/DigitalSolution/DigitalTransformation.jsx";
import OurDigitalSolution from "./pages/Capabilities/DigitalSolution/OurDigitalSolution.jsx";
import DiffrentIndustries from "./pages/Capabilities/DigitalSolution/DiffrentIndustries.jsx";
import ConnectedBusiness from "./pages/Capabilities/DigitalSolution/ConnectedBusiness.jsx";
import TechTorchTechnology from "./pages/Capabilities/DigitalSolution/TechTorchTechnology.jsx";
import RequirementReality from "./pages/Capabilities/DigitalSolution/RequirementReality.jsx";

// =================================================
// CAPABILITIES - OUR SERVICE
// =================================================
import OurServiceHero from "./pages/Capabilities/OurService/OurServiceHero.jsx";
import StrategicPerspective from "./pages/Capabilities/OurService/StrategicPerspective.jsx";
import PortfolioArchitecture from "./pages/Capabilities/OurService/PortfolioArchitecture.jsx";
import DeliveryBlueprint from "./pages/Capabilities/OurService/DeliveryBlueprint.jsx";
import TechnologyRoadmap from "./pages/Capabilities/OurService/TechnologyRoadmap.jsx";

// =================================================
// CAPABILITIES - ARTIFICIAL INTELLIGENCE
// =================================================
import AiService from "./pages/Capabilities/Ai/AiService.jsx";
import AiStrategic from "./pages/Capabilities/Ai/AiStrategic.jsx";
import AiAdvantage from "./pages/Capabilities/Ai/AiAdvantage.jsx";
import AiEcosystem from "./pages/Capabilities/Ai/AiEcosystem.jsx";
import AiEcosystemIntegration from "./pages/Capabilities/Ai/AiEcosystemIntegration.jsx";

// =================================================
// CAPABILITIES - IT AUGMENTATION
// =================================================
import ItWorkforceVelocity from "./pages/Capabilities/ItAugmentation/ItWorkforceVelocity.jsx";
import ItStrategicperspective from "./pages/Capabilities/ItAugmentation/ItStrategicperspective.jsx";
import ItFlexibleEngagement from "./pages/Capabilities/ItAugmentation/ItFlexibleEngagement.jsx";
import ItOperational from "./pages/Capabilities/ItAugmentation/ItOperational.jsx";

// =================================================
// CONTRACT STAFFING
// =================================================
import Contracthero from "./pages/Capabilities/ItAugmentation/ContractStaffing/Contracthero.jsx";
import CapabilityAnalysis from "./pages/Capabilities/ItAugmentation/ContractStaffing/CapabilityAnalysis.jsx";
import Pipeline from "./pages/Capabilities/ItAugmentation/ContractStaffing/Pipeline.jsx";

// =================================================
// CONTRACT TO HIRE
// =================================================
import ContractToHireHero from "./pages/Capabilities/ItAugmentation/ContractToHire/ContractToHireHero.jsx";
import CthFramework from "./pages/Capabilities/ItAugmentation/ContractToHire/CthFramework.jsx";
import BuildConfidence from "./pages/Capabilities/ItAugmentation/ContractToHire/BuildConfidence.jsx";

// =================================================
// DEDICATED DEVELOPMENT
// =================================================
import DdHero from "./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdHero.jsx";
import DdOverview from "./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdOverview.jsx";
import DdStrenghten from "./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdStrenghten.jsx";

// =================================================
// REMOTE ENGINEER
// =================================================
import ReHero from "./pages/Capabilities/ItAugmentation/RemoteEngineer/ReHero.jsx";
import CapabilityOverview from "./pages/Capabilities/ItAugmentation/RemoteEngineer/CapabilityOverview.jsx";
import ReStrengthen from "./pages/Capabilities/ItAugmentation/RemoteEngineer/ReStrengthen.jsx";

// =================================================
// PROJECT BASED HIRING
// =================================================
import PbhHero from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhHero.jsx";
import PbhExecutive from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhExecutive.jsx";
import PbhSpecialized from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhSpecialized.jsx";
import PbhProjectForward from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhProjectForward.jsx";

// =================================================
// RESOURCE / BENCH / VENDOR
// =================================================
import RrMain from "./pages/Capabilities/ItAugmentation/ResourceReplacement/RrMain.jsx";
import BhMain from "./pages/Capabilities/ItAugmentation/BenchHiring/BhMain.jsx";
import VpMain from "./pages/Capabilities/ItAugmentation/VendorPartnership/VpMain.jsx";
import BecomePartner from "./pages/Capabilities/ItAugmentation/VendorPartnership/BecomePartner.jsx";

// =================================================
// MSP SUPPORT
// =================================================
import MSP1 from "./pages/Capabilities/ItAugmentation/MSPSupport/MSP1.jsx";
import MSP2 from "./pages/Capabilities/ItAugmentation/MSPSupport/MSP2.jsx";
import MSP3 from "./pages/Capabilities/ItAugmentation/MSPSupport/MSP3.jsx";
import DiscussPriorities from "./pages/Capabilities/ItAugmentation/MSPSupport/DiscussPriorities.jsx";
import ConnectMSP from "./pages/Capabilities/ItAugmentation/MSPSupport/ConnectMSP.jsx";

// =================================================
// OFFSHORE TEAMS
// =================================================
import OffshoreStrategy from "./pages/Capabilities/ItAugmentation/OffshoreTeams/OffshoreStrategy.jsx";
import EngagementArchitecture from "./pages/Capabilities/ItAugmentation/OffshoreTeams/EngagementArchitecture.jsx";
import LifecycleGovernance from "./pages/Capabilities/ItAugmentation/OffshoreTeams/LifecycleGovernance.jsx";
import DevelopmentTeam from "./pages/Capabilities/ItAugmentation/OffshoreTeams/DevelopmentTeam.jsx";
import DevelopmentRequirements from "./pages/Capabilities/ItAugmentation/OffshoreTeams/DevelopmentRequirements.jsx";

// =================================================
// EDUCATION
// =================================================
import EducationHero from "./pages/Industry/Education/EducationHero.jsx";
import EducationWork from "./pages/Industry/Education/EducationWork.jsx";
import EducationTechnology from "./pages/Industry/Education/EducationTechnology.jsx";
import EducationGrowth from "./pages/Industry/Education/EducationGrowth.jsx";
import EducationMethodology from "./pages/Industry/Education/EducationMethodology.jsx";
import EducationTransform from "./pages/Industry/Education/EducationTransform.jsx";
import EducationSolutions from "./pages/Industry/Education/EducationSolutions.jsx";
import ScheduleDiscovery from "./pages/Industry/Education/ScheduleDiscovery.jsx";

// =================================================
// INSURANCE
// =================================================
import InsuranceHero from "./pages/Industry/Insurance/InsuranceHero.jsx";
import InsuranceSolution from "./pages/Industry/Insurance/InsuranceSolution.jsx";
import ConnectedOperation from "./pages/Industry/Insurance/ConnectedOperations.jsx";
import InsuranceDigitalTransformation from "./pages/Industry/Insurance/InsuranceDigitalTransformation.jsx";
import InsuranceCustomer from "./pages/Industry/Insurance/InsuranceCustomer.jsx";
import InsuranceWhyTt from "./pages/Industry/Insurance/InsuranceWhyTt.jsx";
import GetInTouch from "./pages/Industry/Insurance/GetInTouch.jsx";

// =================================================
// FINANCE
// =================================================
import FinanceHero from "./pages/Industry/Finance/FinanceHero.jsx";
import FinanceArchitecture from "./pages/Industry/Finance/FinanceArchitecture.jsx";
import FinanceTechnology from "./pages/Industry/Finance/FinanceTechnology.jsx";
import FinanceKeyBusiness from "./pages/Industry/Finance/FinanceKeyBusiness.jsx";
import FinanceFintech from "./pages/Industry/Finance/FinanceFintech.jsx";
import FinanceNextStep from "./pages/Industry/Finance/FinanceNextStep.jsx";
import FinanceGetInTouch from "./pages/Industry/Finance/FinanceGetInTouch.jsx";

// =================================================
// HEALTHCARE
// =================================================
import HealthcareHero from "./pages/Industry/Healthcare/HealthcareHero.jsx";
import HealthcareExplore from "./pages/Industry/Healthcare/HealthcareExplore.jsx";
import HealthcareTechnology from "./pages/Industry/Healthcare/HealthcareTechnology.jsx";
import HealthcareOperation from "./pages/Industry/Healthcare/HealthcareOperation.jsx";
import ExperianceSecurity from "./pages/Industry/Healthcare/ExperianceSecurity.jsx";
import InsightOperations from "./pages/Industry/Healthcare/InsightOperations.jsx";
import HealthcareApproach from "./pages/Industry/Healthcare/HealthcareApproach.jsx";
import TransformationDesk from "./pages/Industry/Healthcare/TransformationDesk.jsx";
import HealthcareGetInTouch from "./pages/Industry/Healthcare/HealthcareGetInTouch.jsx";

// =================================================
// INFORMATION TECHNOLOGY
// =================================================
import ItHero from "./pages/Industry/InformationTechnology/ItHero.jsx";
import ItBusiness from "./pages/Industry/InformationTechnology/ItBusiness.jsx";
import ItService from "./pages/Industry/InformationTechnology/ItService.jsx";
import ItSoftware from "./pages/Industry/InformationTechnology/ItSoftware.jsx";
import ItDigitalSolution from "./pages/Industry/InformationTechnology/ItDigitalSolution.jsx";
import ItInfrastructure from "./pages/Industry/InformationTechnology/ItInfrastructure.jsx";
import ItApproach from "./pages/Industry/InformationTechnology/ItApproach.jsx";
import ItTechTorch from "./pages/Industry/InformationTechnology/ItTechTorch.jsx";
import ItFoundation from "./pages/Industry/InformationTechnology/ItFoundation.jsx";
import ITGetInTouch from "./pages/Industry/InformationTechnology/ITGetInTouch.jsx";

// =================================================
// MANUFACTURING
// =================================================
import ManufacturingHero from "./pages/Industry/Manufacturing/ManufacturingHero.jsx";
import ManufacturingTechnology from "./pages/Industry/Manufacturing/ManufacturingTechnology.jsx";
import ManufacturingSolution from "./pages/Industry/Manufacturing/ManufacturingSolution.jsx";
import ManufacturingErp from "./pages/Industry/Manufacturing/ManufacturingErp.jsx";
import SoftwareEngineering from "./pages/Industry/Manufacturing/SoftwareEngineering.jsx";
import ManufacturingApproach from "./pages/Industry/Manufacturing/ManufacturingApproach.jsx";
import ManufacturingTechTorch from "./pages/Industry/Manufacturing/ManufacturingTechTorch.jsx";
import ManufacturingGetInTouch from "./pages/Industry/Manufacturing/ManufacturingGetInTouch.jsx";

// =================================================
// TELECOMMUNICATIONS
// =================================================
import TcHero from "./pages/Industry/Telecommunication/TcHero.jsx";
import TcTechnology from "./pages/Industry/Telecommunication/TcTechnology.jsx";
import TcKeySolution from "./pages/Industry/Telecommunication/TcKeySolution.jsx";
import TcSoftwareEngineer from "./pages/Industry/Telecommunication/TcSoftwareEngineer.jsx";
import TcService from "./pages/Industry/Telecommunication/TcService.jsx";
import TcApproach from "./pages/Industry/Telecommunication/TcApproach.jsx";
import TcGetinTouch from "./pages/Industry/Telecommunication/TcGetInTouch.jsx";

// =================================================
// ENERGY
// =================================================
import EnergyHero from "./pages/Industry/Energy/EnergyHero.jsx";
import EnergyTechnology from "./pages/Industry/Energy/EnergyTechnology.jsx";
import EnergyKeySolution from "./pages/Industry/Energy/EnergyKeySolution.jsx";
import EnergySoftwareEngineering from "./pages/Industry/Energy/EnergySoftwareEngineering.jsx";
import EnergyTechnologyService from "./pages/Industry/Energy/EnergyTechnologyService.jsx";
import EnergyApproach from "./pages/Industry/Energy/EnergyApproach.jsx";
import EnergyGetInTouch from "./pages/Industry/Energy/EnergyGetInTouch.jsx";

// =================================================
// TRANSPORTATION
// =================================================
import TransHero from "./pages/Industry/Transportation/TransHero.jsx";
import TransportationConnected from "./pages/Industry/Transportation/TransportationConnected.jsx";
import TransportationSolution from "./pages/Industry/Transportation/TransportationSolution.jsx";
import TransportationSupplyChain from "./pages/Industry/Transportation/TransportationSupplyChain.jsx";
import TransportationSoftware from "./pages/Industry/Transportation/TransportationSoftware.jsx";
import TransportationApproach from "./pages/Industry/Transportation/TransportationApproach.jsx";
import TransportationEnterprise from "./pages/Industry/Transportation/TransportationEnterprise.jsx";
import TransportationGetInTouch from "./pages/Industry/Transportation/TransportationGetInTouch.jsx";

// =================================================
// FMCG
// =================================================
import FmcgHero from "./pages/Industry/Fmcg/FmcgHero.jsx";
import FmcgSolution from "./pages/Industry/Fmcg/FmcgSolution.jsx";
import FmcgOurSolution from "./pages/Industry/Fmcg/FmcgOurSolution.jsx";
import FmcgManagement from "./pages/Industry/Fmcg/FmcgManagement.jsx";
import FmcgBusiness from "./pages/Industry/Fmcg/FmcgBusiness.jsx";
import FmcgSoftwareEngineering from "./pages/Industry/Fmcg/FmcgSoftwareEngineering.jsx";
import FmcgTechnologyService from "./pages/Industry/Fmcg/FmcgTechnologyService.jsx";
import FmcgApproach from "./pages/Industry/Fmcg/FmcgApproach.jsx";
import FmcgGetInTouch from "./pages/Industry/Fmcg/FmcgGetInTouch.jsx";

// =================================================
// E-COMMERCE
// =================================================
import EcommerceHero from "./pages/Industry/ECommerce/EcommerceHero.jsx";
import EcommerceEnterprise from "./pages/Industry/ECommerce/EcommerceEnterprise.jsx";
import EcommerceCapabilities from "./pages/Industry/ECommerce/EcommerceCapabilities.jsx";
import EcommerceFrontend from "./pages/Industry/ECommerce/EcommerceFrontend.jsx";
import EcommerceSynergy from "./pages/Industry/ECommerce/EcommerceSynergy.jsx";
import EcommerceCustom from "./pages/Industry/ECommerce/EcommerceCustom.jsx";
import EcommerceIntelligence from "./pages/Industry/ECommerce/EcommerceIntelligence.jsx";
import EcommerceApproach from "./pages/Industry/ECommerce/EcommerceApproach.jsx";
import EcommerceNextPhase from "./pages/Industry/ECommerce/EcommerceNextPhase.jsx";
import ECommerceGetInTouch from "./pages/Industry/ECommerce/ECommerceGetInTouch.jsx";

// =================================================
// START CONVERSATION
// =================================================
import StartConversation from "./pages/StartConversation/StartConversation.jsx";
import ExploreQuestions from "./pages/StartConversation/ExploreQuestions.jsx";
import ConversationToggle from "./pages/StartConversation/ConversationToggle.jsx";

// =================================================
// SCROLL TO TOP
// =================================================
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// =================================================
// COMMON LAYOUT
// =================================================
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

// =================================================
// PAGE HELPER
// Renders a list of section components one after another.
// =================================================
function Stack({ items }) {
  return (
    <>
      {items.map((Section, i) => (
        <Section key={i} />
      ))}
    </>
  );
}

// =================================================
// HOME + HERO SLIDE PAGES
// =================================================
const Home = () => (
  <Stack items={[Hero, Hero2, Hero3, Section4, /* Section5, */ Section6, Section7, Section8, Section9]} />
);

const Slide1Page = () => (
  <Stack items={[HeroSlide01, HeroSlide02, HeroSlide03, HeroSlide04]} />
);

const Slide2Page = () => (
  <Stack items={[Hero02Slide01, Hero02Slide02, Hero02Slide03, Hero02Slide04, Hero02Slide05, Hero02Slide06]} />
);

const Slide3Page = () => (
  <Stack items={[Hero03Slide01, Hero03Slide02, Hero03Slide03, Hero03Slide04, Hero03Slide05, Hero03Slide06, Hero03Slide07]} />
);

const Slide4Page = () => (
  <Stack items={[Hero04Slide01, Hero04Slide02, Hero04Slide03, Hero04Slide04, Hero04Slide05]} />
);

const Slide5Page = () => (
  <Stack items={[Hero05Slide01, Hero05Slide02, Hero05Slide03, Hero05Slide04]} />
);

// =================================================
// OUR STORY / KNOW MORE
// =================================================
const PhilosophyPage = () => (
  <Stack items={[EnterpriseHero, CoreFoundation, ScaleAtSpeed, StrategicCapabilities, PhiosophySection, TransformationForm]} />
);

const KnowMorePage = () => (
  <Stack items={[EnterpriseAcceleration, TransformationReady, ProvenImpact, PracticalIntelligence]} />
);

// =================================================
// WHAT'S NEXT
// =================================================
const TechTorchViewPage = () => (
  <Stack items={[TechTorchView, Philosophy, Capabilities, Methodology, ReadyScale]} />
);

const FieldNotePage = () => (
  <Stack items={[Banner, TechnologySection, ConnectSection, OperationalAdvantage, IntegratedCapabilities]} />
);

const ThinkAheadPage = () => (
  <Stack items={[ReadSection, Technologyarticlesection, EcosystemHeroSection, PerspectiveSection]} />
);

const CyberSecurityPage = () => (
  <Stack items={[WhatsNextSection, CyberSecurityHeroSection, SecurityCapabilitiesSection, ResiliencePillarsSection, SecurityOutcomes]} />
);

const CyberSecurityAboutPage = () => (
  <Stack items={[SecurityPerspectiveSection, AboutSecurity, SecurityChallenge, EditorialReflection, OurApproach, WhyTechtorch]} />
);

const SecureBusinessPage = () => (
  <Stack items={[SecurityInitiative, ProtocolDelivery, SelectionEngine, AdvisoryFramework]} />
);

const ScheduleAdvisoryPage = () => (
  <Stack items={[AdvisoryDesk, DispatchConsole, TimeboxProtocol]} />
);

const BusinessGrowthPage = () => (
  <Stack
    items={[
      GrowWithBusinessSection,
      PurspectiveSection,
      ArchitectureSection,
      MethodologySection,
      EcosystemCapabilitiesSection,
      TechnologyCapabilities,
      CoreEngineering,
      MarketExpertiseSection,
      InstitutionalCommitmentSection,
      ParadigmSection,
    ]}
  />
);

const TechPulsePage = () => (
  <Stack
    items={[
      DataDecisions,
      PerspectiveAnalysis,
      StrategicInquiry,
      StructuredMethodology,
      OperationalImpact,
      Automation,
      CrossFunctional,
      Discipline,
      ExecutiveStrategy,
    ]}
  />
);

const TechPulseDigitalSolutionPage = () => (
  <Stack items={[EnterpriseSolution, SystemicAgility, ArchitectureLifecycle, ValidatedSystems]} />
);

// =================================================
// CAPABILITIES
// =================================================
const PlatformPage = () => (
  <Stack items={[Businessplatformshero, OurAproach, OurPlatforms, TechTorchPlatform, DirectEnterprise]} />
);

const DigitalSolutionPage = () => (
  <Stack
    items={[
      DigitalSolutionHero,
      DigitalTransformation,
      OurDigitalSolution,
      DiffrentIndustries,
      ConnectedBusiness,
      TechTorchTechnology,
      RequirementReality,
    ]}
  />
);

const OurServicePage = () => (
  <Stack items={[OurServiceHero, StrategicPerspective, PortfolioArchitecture, DeliveryBlueprint, TechnologyRoadmap]} />
);

const AiPage = () => (
  <Stack items={[AiService, AiStrategic, AiAdvantage, AiEcosystem, AiEcosystemIntegration]} />
);

const ItAugmentationPage = () => (
  <Stack items={[ItWorkforceVelocity, ItStrategicperspective, ItFlexibleEngagement, ItOperational]} />
);

const ContractStaffingPage = () => (
  <Stack items={[Contracthero, CapabilityAnalysis, Pipeline]} />
);

const ContractToHirePage = () => (
  <Stack items={[ContractToHireHero, CthFramework, BuildConfidence]} />
);

const DedicatedDevelopmentPage = () => (
  <Stack items={[DdHero, DdOverview, DdStrenghten]} />
);

const RemoteEngineerPage = () => (
  <Stack items={[ReHero, CapabilityOverview, ReStrengthen]} />
);

const ProjectBasedHiringPage = () => (
  <Stack items={[PbhHero, PbhExecutive, PbhSpecialized, PbhProjectForward]} />
);

const MspSupportPage = () => (
  <Stack items={[MSP1, MSP2, MSP3, DiscussPriorities, ConnectMSP]} />
);

const OffshoreTeamsPage = () => (
  <Stack items={[OffshoreStrategy, EngagementArchitecture, LifecycleGovernance, DevelopmentTeam, DevelopmentRequirements]} />
);

// =================================================
// INDUSTRIES
// =================================================
const EducationPage = () => (
  <Stack
    items={[
      EducationHero,
      EducationWork,
      EducationTechnology,
      EducationGrowth,
      EducationMethodology,
      EducationTransform,
      EducationSolutions,
      ScheduleDiscovery,
    ]}
  />
);

const InsurancePage = () => (
  <Stack
    items={[
      InsuranceHero,
      InsuranceSolution,
      ConnectedOperation,
      InsuranceDigitalTransformation,
      InsuranceCustomer,
      InsuranceWhyTt,
      GetInTouch,
    ]}
  />
);

const FinancePage = () => (
  <Stack
    items={[
      FinanceHero,
      FinanceArchitecture,
      FinanceTechnology,
      FinanceKeyBusiness,
      FinanceFintech,
      FinanceNextStep,
      FinanceGetInTouch,
    ]}
  />
);

const HealthcarePage = () => (
  <Stack
    items={[
      HealthcareHero,
      HealthcareExplore,
      HealthcareTechnology,
      HealthcareOperation,
      ExperianceSecurity,
      InsightOperations,
      HealthcareApproach,
      TransformationDesk,
      HealthcareGetInTouch,
    ]}
  />
);

const InformationTechnologyPage = () => (
  <Stack
    items={[
      ItHero,
      ItBusiness,
      ItService,
      ItSoftware,
      ItDigitalSolution,
      ItInfrastructure,
      ItApproach,
      ItTechTorch,
      ItFoundation,
      ITGetInTouch,
    ]}
  />
);

const ManufacturingPage = () => (
  <Stack
    items={[
      ManufacturingHero,
      ManufacturingTechnology,
      ManufacturingSolution,
      ManufacturingErp,
      SoftwareEngineering,
      ManufacturingApproach,
      ManufacturingTechTorch,
      ManufacturingGetInTouch,
    ]}
  />
);

const TelecommunicationPage = () => (
  <Stack items={[TcHero, TcTechnology, TcKeySolution, TcSoftwareEngineer, TcService, TcApproach, TcGetinTouch]} />
);

const EnergyPage = () => (
  <Stack
    items={[
      EnergyHero,
      EnergyTechnology,
      EnergyKeySolution,
      EnergySoftwareEngineering,
      EnergyTechnologyService,
      EnergyApproach,
      EnergyGetInTouch,
    ]}
  />
);

const TransportationPage = () => (
  <Stack
    items={[
      TransHero,
      TransportationConnected,
      TransportationSolution,
      TransportationSupplyChain,
      TransportationSoftware,
      TransportationApproach,
      TransportationEnterprise,
      TransportationGetInTouch,
    ]}
  />
);

const FmcgPage = () => (
  <Stack
    items={[
      FmcgHero,
      FmcgSolution,
      FmcgOurSolution,
      FmcgManagement,
      FmcgBusiness,
      FmcgSoftwareEngineering,
      FmcgTechnologyService,
      FmcgApproach,
      FmcgGetInTouch,
    ]}
  />
);

const EcommercePage = () => (
  <Stack
    items={[
      EcommerceHero,
      EcommerceEnterprise,
      EcommerceCapabilities,
      EcommerceFrontend,
      EcommerceSynergy,
      EcommerceCustom,
      EcommerceIntelligence,
      EcommerceApproach,
      EcommerceNextPhase,
      ECommerceGetInTouch,
    ]}
  />
);

// =================================================
// START CONVERSATION
// =================================================
const StartConversationPage = () => (
  <Stack items={[StartConversation, ExploreQuestions, ConversationToggle]} />
);

// =================================================
// APP + ROUTES
// NOTE: URL paths below are assumptions - make sure they match
// the links used in your Navbar / Footer / buttons.
// =================================================
export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* HERO SLIDE PAGES */}
          <Route path="/slide-1" element={<Slide1Page />} />
          <Route path="/slide-2" element={<Slide2Page />} />
          <Route path="/slide-3" element={<Slide3Page />} />
          <Route path="/slide-4" element={<Slide4Page />} />
          <Route path="/slide-5" element={<Slide5Page />} />

          {/* OUR STORY / KNOW MORE */}
          <Route path="/our-story" element={<PhilosophyPage />} />
          <Route path="/know-more" element={<KnowMorePage />} />

          {/* WHAT'S NEXT */}
          <Route path="/whats-next/techtorch-view" element={<TechTorchViewPage />} />

          <Route path="/whats-next/field-note" element={<FieldNotePage />} />
          <Route path="/whats-next/field-note/integrated-capabilities" element={<IntegratedCapLayout />} />
          <Route path="/whats-next/field-note/integrated-capabilities/erp-integration" element={<ERPIntegration />} />
          <Route path="/whats-next/field-note/integrated-capabilities/operations-management" element={<OpManagement />} />
          <Route path="/whats-next/field-note/integrated-capabilities/data-orchestration" element={<DataOrchestration />} />
          <Route path="/whats-next/field-note/integrated-capabilities/legacy" element={<Legacy />} />

          <Route path="/whats-next/think-ahead" element={<ThinkAheadPage />} />

          <Route path="/whats-next/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/whats-next/cyber-security/about" element={<CyberSecurityAboutPage />} />
          <Route path="/whats-next/cyber-security/secure-business" element={<SecureBusinessPage />} />
          <Route path="/whats-next/cyber-security/secure-business/engagement-protocol" element={<ViewEngagementProtocol />} />
          <Route path="/whats-next/cyber-security/secure-business/engagement-protocol/accept" element={<AcceptProceed />} />
          <Route path="/whats-next/cyber-security/secure-business/engagement-protocol/export" element={<ExportProtocolPackage />} />
          <Route path="/whats-next/cyber-security/secure-business/schedule-advisory" element={<ScheduleAdvisoryPage />} />

          <Route path="/whats-next/business-growth" element={<BusinessGrowthPage />} />

          <Route path="/whats-next/tech-pulse" element={<TechPulsePage />} />
          <Route path="/whats-next/tech-pulse/digital-solutions" element={<TechPulseDigitalSolutionPage />} />

          {/* CAPABILITIES */}
          <Route path="/capabilities/platform" element={<PlatformPage />} />
          <Route path="/capabilities/digital-solutions" element={<DigitalSolutionPage />} />
          <Route path="/capabilities/our-service" element={<OurServicePage />} />
          <Route path="/capabilities/ai" element={<AiPage />} />

          <Route path="/capabilities/it-augmentation" element={<ItAugmentationPage />} />
          <Route path="/capabilities/it-augmentation/contract-staffing" element={<ContractStaffingPage />} />
          <Route path="/capabilities/it-augmentation/contract-to-hire" element={<ContractToHirePage />} />
          <Route path="/capabilities/it-augmentation/dedicated-development" element={<DedicatedDevelopmentPage />} />
          <Route path="/capabilities/it-augmentation/remote-engineer" element={<RemoteEngineerPage />} />
          <Route path="/capabilities/it-augmentation/project-based-hiring" element={<ProjectBasedHiringPage />} />
          <Route path="/capabilities/it-augmentation/resource-replacement" element={<RrMain />} />
          <Route path="/capabilities/it-augmentation/bench-hiring" element={<BhMain />} />
          <Route path="/capabilities/it-augmentation/vendor-partnership" element={<VpMain />} />
          <Route path="/capabilities/it-augmentation/vendor-partnership/become-partner" element={<BecomePartner />} />
          <Route path="/capabilities/it-augmentation/msp-support" element={<MspSupportPage />} />
          <Route path="/capabilities/it-augmentation/offshore-teams" element={<OffshoreTeamsPage />} />

          {/* INDUSTRIES */}
          <Route path="/industry/education" element={<EducationPage />} />
          <Route path="/industry/insurance" element={<InsurancePage />} />
          <Route path="/industry/finance" element={<FinancePage />} />
          <Route path="/industry/healthcare" element={<HealthcarePage />} />
          <Route path="/industry/information-technology" element={<InformationTechnologyPage />} />
          <Route path="/industry/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industry/telecommunication" element={<TelecommunicationPage />} />
          <Route path="/industry/energy" element={<EnergyPage />} />
          <Route path="/industry/transportation" element={<TransportationPage />} />
          <Route path="/industry/fmcg" element={<FmcgPage />} />
          <Route path="/industry/ecommerce" element={<EcommercePage />} />

          {/* START CONVERSATION */}
          <Route path="/start-conversation" element={<StartConversationPage />} />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}