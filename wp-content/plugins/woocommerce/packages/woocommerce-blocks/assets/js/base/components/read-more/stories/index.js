/**
 * Internal dependencies
 */
import ReadMore from '../';

export default {
	title: 'WooCommerce Blocks/@base-components/ReadMore',
	component: ReadMore,
};

export const Default = () => (
	<ReadMore maxLines={ 2 }>
		<h1>
			No! Alderaan is peaceful. We have no weapons. You can&apos;t
			possibly…
		</h1>
		<p>
			As you wish. But with the blast shield down, I can&apos;t even see!
			How am I supposed to fight? Look, I ain&apos;t in this for your
			revolution, and I&apos;m not in it for you, Princess. I expect to be
			well paid. I&apos;m in it for the money.
		</p>
		<p>
			You mean it controls your actions?
			<strong>
				{ ' ' }
				She must have hidden the plans in the escape pod.
			</strong>{ ' ' }
			<em>
				Send a detachment down to retrieve them, and see to it
				personally, Commander.
			</em>
			There&apos;ll be no one to stop us this time!
		</p>
		<h2>Escape is not his plan. I must face him, alone.</h2>
		<ol>
			<li>Partially, but it also obeys your commands.</li>
			<li>
				Leave that to me. Send a distress signal, and inform the Senate
				that all on board were killed.
			</li>
			<li>
				A tremor in the Force. The last time I felt it was in the
				presence of my old master.
			</li>
		</ol>
		<aside>
			<a href="https://fillerama.io">
				Content from https://fillerama.io &quot;Star Wars&quot;
			</a>
		</aside>
	</ReadMore>
);
