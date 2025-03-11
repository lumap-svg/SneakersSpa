import Crd from './Crd';

export default function HowItWorks() {
  const procedural:Crd[] = [
    {
      position: 1,
      title: "Pick-Up",
      description: "We come to you!",
      content: "Our rider picks up your sneakers at your doorstep, ensuring convenience and a hassle-free experience.",
      linker: "contact"
    },
    {
      position: 2,
      title: "Advanced Cleaning Machines",
      description: "High-tech machines for the perfect clean.",
      content: "Our state-of-the-art machines gently wash and dry all kinds of sneakers, from your beloved running shoes to your high-end designer kicks.",
      linker: "more details"
    },
    {
      position: 3,
      title: "Quick Turnaround",
      description: "Time is precious, we get it",
      content: "In just 2 hours, your shoes are cleaned, dried, and ready for wear—no more waiting days for shoe cleaning services!",
      linker: "more details"
    },
    {
      position: 4,
      title: "Drop-Off",
      description: "We come to you!",
      content: "Once cleaned, we drop them back to you, so you don’t have to leave the comfort of your home.",
      linker: "contact"
    },
  ];

  return (
    <div className='border rounded-lg shadow-xl border-[#ebd455f8] p-4 '>
      <h2 className='text-3xl text-center my-5 font-bold uppercase text-[#ebd455f8]'>How It Works</h2>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {procedural.map(({ position, title, description, linker, content }) => (
          <Crd key={position} position={position} title={title} description={description} linker={linker} content={content}/>
          // <Crd key={position} position={position} title={title} description={description} content={content} linker={linker} />
        ))}
      </div>
    </div>
  );
}
