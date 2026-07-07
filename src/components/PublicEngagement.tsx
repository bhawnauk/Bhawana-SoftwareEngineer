import { publicEngagement} from '../data';

export default function PublicEngagement() {
  return (
    <section>
      <p className="text-xl font-bold tracking-wide text-ember mb-2">PUBLIC ENGAGEMENT</p>
      <h2 className="font-display text-xl text-paper mb-8 ">Demonstrating Impact and  Leadership apart from Technical Skills</h2>

     <div>
         <ol className="flex flex-col">
        {publicEngagement.map((item) => (
          <li key={item.company} className="grid grid-cols-[100px_1fr] gap-6 py-5 border-t border-line first:border-t-0">
            <p className="text-xs text-faint pt-0.5">{item.period}</p>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap mb-2">
                <h3 className="text-sm font-medium text-paper">{item.role}</h3>
                <span className="text-xs text-muted"> @ {item.company}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {item.highlights.map((h) => (
                  <li key={h} className="text-[13px] leading-6 text-muted flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-ember-soft shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <br/>
    
              <img
                src="/engagement.jpg"
                alt={PublicEngagement.name}
                className="hidden sm:flex max-w-[350px] pl-3 shrink-0 object-cover"
                />
            </div>
            
          </li>
        ))}
      </ol>
 

      </div>

      {/* <div>
         <ol className="flex flex-col">
        {publicEngagement.map((item) => (
          <li key={item.company} className="grid grid-cols-[100px_1fr] gap-6 py-5 border-t border-line first:border-t-0">
            <p className="text-xs text-faint pt-0.5">{item.period}</p>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap mb-2">
                <h3 className="text-sm font-medium text-paper">{item.role}</h3>
                <span className="text-xs text-muted"> @ {item.company}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {item.highlights.map((h) => (
                  <li key={h} className="text-[13px] leading-6 text-muted flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-ember-soft shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <br/>
    
              <img
                src="/engagement.jpg"
                alt={PublicEngagement.name}
                className="hidden sm:flex max-w-[350px] pl-3 shrink-0 object-cover"
                />
            </div>
            
          </li>
        ))}
      </ol>
 

      </div> */}
      
      
    </section>
  );
}