
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (
      <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=900&t=st=1684539556~exp=1684540156~hmac=7130f0ae5331ba4ce7807efa3621be1abfcbb8df55351f2ba9969370d5ba2d2f" alt="" />
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-green-300 text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    )
  };
  

export default Error;