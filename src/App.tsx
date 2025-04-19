import Footer from "./components/Footer";
import Header from "./components/Header";
import { events } from "./events";

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};

const App = () => {
  const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <Header />

      <div className="flex flex-row items-center justify-center w-full h-full gap-12 p-12">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold border-b-black border-b-2 w-48">Filter Events</p>
          <p className="text-xl">Filter By Title</p>
          <input className="bg-white border-black border-2 h-10" />
          <p className="text-xl">Department</p>
          <input className="bg-white border-black border-2 h-10" />
          <p className="text-xl">Category</p>
          <input className="bg-white border-black border-2 h-10" />

          <p className="text-xl">Location Type</p>
          <p className="text-xl font-bold">
            <input type="checkbox" /> Virtual
          </p>
          <p className="text-xl font-bold">
            <input type="checkbox" /> Held at city location
          </p>
          <p className="text-xl font-bold">
            <input type="checkbox" /> Other location
          </p>

          <div className="bg-amber-600 text-white w-36 h-12 flex items-center justify-center text-xl">Apply</div>
        </div>
        <div className="h-[50vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {sortedEvents.map((event, index) => (
            <div key={index} className="flex flex-col gap-2 p-4 rounded bg-amber-600">
              <p className="text-2xl font-bold">{event.title}</p>
              <p className="font-semibold text-xl">{event.description}</p>
              <p>{formatDate(event.date)}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
