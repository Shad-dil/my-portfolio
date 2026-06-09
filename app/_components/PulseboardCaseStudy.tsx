export default function PulseBoardCaseStudy() {
  return (
    <article className="space-y-12 text-gray-300 leading-relaxed">
      <section>
        <h1 className="text-3xl font-bold text-violet-400 mb-2">PulseBoard</h1>
        <p className="text-lg">
          Role-Based Frontend Architecture for Data-Heavy Products
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          PulseBoard is a frontend system designed to handle complex
          permissions, real-time data, and evolving feature requirements while
          remaining predictable and scalable.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Core Challenges</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Permission safety across multiple roles</li>
          <li>Predictable async data handling</li>
          <li>Schema-consistent form validation</li>
          <li>Performance under growing datasets</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">
          Key Engineering Decisions
        </h2>

        <div className="space-y-4">
          <p>
            <strong className="text-white">Role-Based Access Control:</strong>{" "}
            Implemented at route, component, and action levels to prevent
            accidental access.
          </p>

          <p>
            <strong className="text-white">
              Server vs UI State Separation:
            </strong>{" "}
            React Query centralized async state and reduced re-render issues.
          </p>

          <p>
            <strong className="text-white">Schema-driven validation:</strong>{" "}
            Zod schemas became the single source of truth for form validation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Outcome & Impact</h2>
        <p>
          The system remained predictable as features scaled, permission logic
          stayed understandable, and UI performance remained stable under
          increased data complexity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          What I Would Improve Next
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Feature flags for safer rollouts</li>
          <li>Audit-log visibility at the UI layer</li>
          <li>Shared RBAC policy module</li>
        </ul>
      </section>
    </article>
  );
}
