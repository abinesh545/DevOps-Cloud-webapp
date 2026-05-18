import { ThemeToggle } from "./theme-toggle";

const roadmap = [
  {
    phase: "01",
    title: "Linux, Networking, and Git",
    points: [
      "Master the terminal, permissions, processes, systemd, SSH, and package managers.",
      "Learn DNS, HTTP, TLS, load balancing, firewalls, CIDR, and basic troubleshooting.",
      "Use Git daily with branches, pull requests, conflict resolution, and release tags.",
    ],
  },
  {
    phase: "02",
    title: "Scripting and Automation",
    points: [
      "Write Bash for repeatable server tasks and Python for cloud/API automation.",
      "Understand JSON, YAML, regular expressions, cron, environment variables, and secrets.",
      "Build small tools that check services, rotate logs, and call cloud APIs.",
    ],
  },
  {
    phase: "03",
    title: "Cloud Foundations",
    points: [
      "Pick AWS, Azure, or Google Cloud first, then learn compute, storage, IAM, VPCs, databases, and monitoring.",
      "Deploy a static site, a containerized API, and a private network with public ingress.",
      "Practice cost awareness, access control, backups, and high availability basics.",
    ],
  },
  {
    phase: "04",
    title: "Containers and CI/CD",
    points: [
      "Package applications with Docker and write clean Dockerfiles and Compose files.",
      "Create CI pipelines that test, scan, build, version, and publish artifacts.",
      "Deploy with GitHub Actions, GitLab CI, Jenkins, or Azure DevOps.",
    ],
  },
  {
    phase: "05",
    title: "Infrastructure as Code",
    points: [
      "Use Terraform to create networks, compute, IAM, databases, and Kubernetes clusters.",
      "Structure modules, state, variables, outputs, and environment separation.",
      "Review infrastructure changes with plans, policy checks, and pull requests.",
    ],
  },
  {
    phase: "06",
    title: "Kubernetes, Observability, and SRE",
    points: [
      "Learn pods, services, ingress, config maps, secrets, deployments, Helm, and autoscaling.",
      "Set up logs, metrics, traces, alerts, SLOs, and incident response notes.",
      "Harden workloads with RBAC, network policies, image scanning, and least privilege.",
    ],
  },
];

const freeResources = [
  "Linux Journey",
  "GitHub Skills",
  "AWS Skill Builder free courses",
  "Microsoft Learn for Azure",
  "Google Cloud Skills Boost free labs",
  "Kubernetes official documentation",
  "Terraform HashiCorp tutorials",
  "Docker official getting started guide",
  "freeCodeCamp DevOps articles and courses",
  "The Linux Foundation free training catalog",
];

const certificates = [
  {
    name: "AWS Certified Cloud Practitioner",
    value: "Great first cloud credential for fundamentals, billing, IAM, and service awareness.",
  },
  {
    name: "AWS Solutions Architect - Associate",
    value: "Strong signal for cloud architecture, networking, reliability, and managed services.",
  },
  {
    name: "Microsoft Azure Fundamentals AZ-900",
    value: "Beginner-friendly path into Azure concepts and enterprise cloud vocabulary.",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    value: "Useful for hands-on cloud operations, deployment, IAM, monitoring, and networking.",
  },
  {
    name: "HashiCorp Terraform Associate",
    value: "Benefits anyone moving into infrastructure as code and platform engineering.",
  },
  {
    name: "Certified Kubernetes Application Developer",
    value: "Practical proof that you can work with Kubernetes workloads and manifests.",
  },
];

const channels = [
  {
    name: "Abhishek Veeramalla",
    url: "https://www.youtube.com/@AbhishekVeeramalla",
  },
  {
    name: "Tech with Piyush",
    url: "https://www.youtube.com/@techtutorialswithpiyush",
  },
  {
    name: "TechWorld with Nana",
    url: "https://www.youtube.com/@TechWorldwithNana",
  },
  {
    name: "freeCodeCamp.org",
    url: "https://www.youtube.com/@freecodecamp",
  },
  {
    name: "NetworkChuck",
    url: "https://www.youtube.com/@NetworkChuck",
  },
  {
    name: "KodeKloud",
    url: "https://www.youtube.com/@KodeKloud",
  },
  {
    name: "The Cloud Resume Challenge",
    url: "https://www.youtube.com/@cloudresumechallenge",
  },
  {
    name: "Stephane Maarek",
    url: "https://www.youtube.com/@StephaneMaarek",
  },
  {
    name: "That DevOps Guy",
    url: "https://www.youtube.com/@MarcelDempers",
  },
  {
    name: "Google Cloud Tech",
    url: "https://www.youtube.com/@googlecloudtech",
  },
  {
    name: "AWS Events",
    url: "https://www.youtube.com/@AWSEventsChannel",
  },
  {
    name: "Microsoft Azure",
    url: "https://www.youtube.com/@MicrosoftAzure",
  },
];

const projects = [
  {
    level: "Beginner",
    title: "Static Portfolio With CI/CD",
    description:
      "Deploy a personal site to Vercel, Netlify, or S3 with GitHub Actions, HTTPS, and automatic preview builds.",
  },
  {
    level: "Beginner",
    title: "Linux Server Health Reporter",
    description:
      "Write Bash scripts that report CPU, memory, disk usage, failed services, and send output to a log file.",
  },
  {
    level: "Beginner",
    title: "Dockerized Web App",
    description:
      "Containerize a small app, add environment variables, health checks, Docker Compose, and a clean README.",
  },
  {
    level: "Intermediate",
    title: "Terraform Cloud Network",
    description:
      "Provision a VPC, subnets, security groups, compute instance, object storage, and remote state with Terraform.",
  },
  {
    level: "Intermediate",
    title: "CI/CD Pipeline With Security Scan",
    description:
      "Build a pipeline that runs tests, builds an image, scans dependencies, tags releases, and pushes to a registry.",
  },
  {
    level: "Intermediate",
    title: "Monitoring Stack",
    description:
      "Run Prometheus, Grafana, and app metrics locally or in cloud, then create dashboards and alert rules.",
  },
  {
    level: "Advanced",
    title: "Kubernetes Production App",
    description:
      "Deploy an app with Helm, ingress, autoscaling, secrets, config maps, resource limits, and rolling updates.",
  },
  {
    level: "Advanced",
    title: "GitOps Platform",
    description:
      "Use Argo CD or Flux to deploy Kubernetes apps from Git with environments, approvals, and rollback strategy.",
  },
  {
    level: "Advanced",
    title: "Cloud Incident Lab",
    description:
      "Create failure scenarios, alerts, runbooks, SLOs, post-incident notes, and an architecture improvement plan.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="teach and tech home">
            <span className="brandMark">t&t</span>
            <span>teach & tech</span>
          </a>
          <div className="navLinks">
            <a href="#roadmap">Roadmap</a>
            <a href="#resources">Resources</a>
            <a href="#certificates">Certificates</a>
            <a href="#youtube">YouTube</a>
          </div>
          <ThemeToggle />
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">DevOps and Cloud Engineer path</p>
            <h1>teach & tech</h1>
            <p className="lead">
              A clear learning path from core IT fundamentals to cloud, automation,
              containers, infrastructure as code, Kubernetes, and production reliability.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#roadmap">
                Start roadmap
              </a>
              <a className="secondaryButton" href="#resources">
                Free learning
              </a>
            </div>
          </div>

          <div className="terminalPanel" aria-label="Learning path summary">
            <div className="terminalHeader">
              <span />
              <span />
              <span />
            </div>
            <div className="terminalBody">
              <p>$ learn --path devops-cloud</p>
              <p className="muted">linux networking git</p>
              <p className="muted">bash python cloud iam vpc</p>
              <p className="muted">docker ci-cd terraform</p>
              <p className="muted">kubernetes observability sre</p>
              <p className="success">status: portfolio-ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="statsBand" aria-label="Learning focus">
        <div>
          <strong>6</strong>
          <span>roadmap phases</span>
        </div>
        <div>
          <strong>10</strong>
          <span>free resources</span>
        </div>
        <div>
          <strong>6</strong>
          <span>career certificates</span>
        </div>
        <div>
          <strong>9</strong>
          <span>level-based projects</span>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="sectionHeader">
          <p className="eyebrow">Roadmap</p>
          <h2>Move from fundamentals to production systems.</h2>
        </div>
        <div className="roadmapGrid">
          {roadmap.map((item) => (
            <article className="roadmapCard" key={item.phase}>
              <span className="phase">{item.phase}</span>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection" id="resources">
        <div className="sectionHeader">
          <p className="eyebrow">Resources</p>
          <h2>Recommended free sources of learning.</h2>
          <p>
            Use these in order while building small projects. Documentation,
            labs, and hands-on repetition matter more than passive watching.
          </p>
        </div>
        <div className="resourceList">
          {freeResources.map((resource) => (
            <div className="resourceItem" key={resource}>
              <span className="check">+</span>
              <span>{resource}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="certificates">
        <div className="sectionHeader">
          <p className="eyebrow">Certificates</p>
          <h2>Certificates that can benefit your career.</h2>
        </div>
        <div className="certGrid">
          {certificates.map((certificate) => (
            <article className="certCard" key={certificate.name}>
              <h3>{certificate.name}</h3>
              <p>{certificate.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection accent" id="youtube">
        <div className="sectionHeader">
          <p className="eyebrow">YouTube</p>
          <h2>Recommended channels for learning.</h2>
          <p>
            Pair videos with labs: pause, rebuild the demo, change one thing,
            break it, and fix it. That is where the skill becomes yours.
          </p>
        </div>
        <div className="channelCloud">
          {channels.map((channel) => (
            <a
              className="channelCard"
              href={channel.url}
              key={channel.name}
              rel="noreferrer"
              target="_blank"
            >
              <span className="playIcon" aria-hidden="true" />
              <span>{channel.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section finalSection">
        <div className="sectionHeader">
          <p className="eyebrow">Portfolio</p>
          <h2>Beginner to advanced projects.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.level}</strong>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
