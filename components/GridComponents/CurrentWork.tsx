import React from 'react'
import { GetStaticProps } from 'next';
import { getRepos } from '@/lib/GitRepos'

interface Props {
    repositories: Repository[] | null;
}

interface Repository {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    updated_at: string;
}
export const getStaticProps: GetStaticProps<Props> = async () => {
    const repositories = await getRepos();
    return {
        props: {
            repositories
        }
    };
};

const CurrentWork = ({repositories}: Props) => {
console.log(repositories);
  return (
      <div className='flex gap-10 justify-between'>
          <div className='font-bold text-2xl max-md:text-xl'>
              Currently working project
          </div>
          <div>project name</div>
          {repositories ? (
              <ul>
                  {repositories.map(repo => (
                      <li key={repo.name}>
                          <h2><a href={repo.html_url}>{repo.name}</a></h2>
                          <p>{repo.description}</p>
                          <p>Created At: {new Date(repo.created_at).toLocaleDateString()}</p>
                          <p>Updated At: {new Date(repo.updated_at).toLocaleDateString()}</p>
                      </li>
                  ))}
              </ul>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  )
}

export default CurrentWork