// utils.ts
import * as c from '../../bindings'

export default new Proxy({} as typeof c, {
	get:
		(_, property: string) =>
		async (...args: unknown[]) => {
			try {
				return await (c as { [key: string]: (...args: unknown[]) => Promise<unknown> })[property](
					...args,
				)
			} catch (e) {
				await c.errorPopup(String(e))
				throw e
			}
		},
})
