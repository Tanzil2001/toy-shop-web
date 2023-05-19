

const Blog = () => {
    return (
        <div className="border border-2 p-5 my-10 rounded-md shadow-xl">
            <div >
                <p className="text-2xl font-bold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code</p>
            </div>
            <div className="my-10">
                <p className="text-2xl font-bold mb-2">Compare SQL and NoSQL databases?</p>
                <p>SQL and NoSQL differ in whether they are relational SQL or non-relational NoSQL, whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data</p>
            </div>
            <div className="mb-10">
                <p className="text-2xl font-bold mb-2">What is express js? What is Nest JS ?</p>
                <p>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI</p>
            </div>
            <div>
                <p className="text-2xl font-bold mb-2">What is MongoDB aggregate and how does it work ?</p>
                <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;