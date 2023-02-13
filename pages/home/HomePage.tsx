import bgImg from '../../public/assets/webphoto.jpg';

export const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          className="w-full h-[100vh] object-cover opacity-20"
          src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};
