import * as cassandra from 'cassandra-driver'

export const americanClient = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'eeuu'
})

export const bolivianClient = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'bolivia'
})
