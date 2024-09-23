import ServiceInfo from "../../components/ServiceInfo";

interface MetricService {
  serviceName: string;
  serviceDescription: string;
  serviceDescription2: string;
  serviceImageLink: string;
  serviceApplicableTechnologies: string[] | null;
}
export default function Page() {
  const metricService: MetricService = {
    serviceName: "Site Metrics Analyzation",
    serviceDescription: "Site Metrics Analyzation and Enhancement refers to the process of evaluating various metrics related to a website's performance, user engagement, and effectiveness in achieving its goals. This involves utilizing tools like Google Analytics or other analytics platforms to gather data on key performance indicators such as website traffic, conversion rates, bounce rates, and user demographics. Analyzing these metrics provides valuable insights into how users interact with the website, which pages are performing well, and where there may be areas for improvement.",
    serviceDescription2: "Once the metrics have been analyzed, the next step is enhancement, which involves making strategic adjustments to the website to improve its performance and effectiveness. This could include optimizing page load times, improving navigation and user experience, enhancing content quality, implementing SEO best practices, and refining calls-to-action. By continuously monitoring site metrics and iteratively enhancing the website based on data-driven insights, I can help my clients achieve their business objectives and maximize the impact of their online presence.",
    serviceImageLink: "/metrics.svg",
    serviceApplicableTechnologies: ["Google Analytics", "Lighthouse"],
  };

  return (
    <ServiceInfo
      service={metricService.serviceName}
      imageSrc={metricService.serviceImageLink}
      description={metricService.serviceDescription}
      description2={metricService.serviceDescription2}
      technologies={metricService.serviceApplicableTechnologies}
    />
  );
}
