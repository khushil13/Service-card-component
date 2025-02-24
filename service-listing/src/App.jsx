import ServiceCard from "./components/ServiceCard";

const App = () => {
  const services = [
    {
      title: "Web deployement",
      provider: "James bond",
      description: "this is about how to do service deployement",
    },
    {
      title: "Web deployement",
      provider: "James bond",
      description: "this is about how to do service deployement",
    },
    {
      title: "Web deployement",
      provider: "James bond",
      description: "this is about how to do service deployement",
    },
  ];

  return (
    <div className="app">
      <h1>Web deployment</h1>
      <div className="services">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default App;