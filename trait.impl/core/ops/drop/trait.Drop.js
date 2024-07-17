(function() {var implementors = {
"mysten_common":[["impl&lt;'a, K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_common/sync/notify_read/struct.Registration.html\" title=\"struct mysten_common::sync::notify_read::Registration\">Registration</a>&lt;'a, K, V&gt;"]],
"mysten_metrics":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/monitored_mpsc/struct.Permit.html\" title=\"struct mysten_metrics::monitored_mpsc::Permit\">Permit</a>&lt;'a, T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/struct.GaugeGuard.html\" title=\"struct mysten_metrics::GaugeGuard\">GaugeGuard</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/histogram/struct.HistogramTimerGuard.html\" title=\"struct mysten_metrics::histogram::HistogramTimerGuard\">HistogramTimerGuard</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/struct.MonitoredScopeGuard.html\" title=\"struct mysten_metrics::MonitoredScopeGuard\">MonitoredScopeGuard</a>"],["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mysten_metrics/metered_channel/struct.Permit.html\" title=\"struct mysten_metrics::metered_channel::Permit\">Permit</a>&lt;'a, T&gt;"]],
"narwhal_network":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"narwhal_network/struct.CancelOnDropHandler.html\" title=\"struct narwhal_network::CancelOnDropHandler\">CancelOnDropHandler</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"narwhal_network/metrics/struct.MetricsResponseHandler.html\" title=\"struct narwhal_network::metrics::MetricsResponseHandler\">MetricsResponseHandler</a>"]],
"sui_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_core/consensus_handler/struct.MysticetiConsensusHandler.html\" title=\"struct sui_core::consensus_handler::MysticetiConsensusHandler\">MysticetiConsensusHandler</a>"]],
"sui_protocol_config":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_protocol_config/struct.OverrideGuard.html\" title=\"struct sui_protocol_config::OverrideGuard\">OverrideGuard</a>"]],
"sui_simulator":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_simulator/struct.NodeLeakDetector.html\" title=\"struct sui_simulator::NodeLeakDetector\">NodeLeakDetector</a>"]],
"sui_storage":[["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, L: <a class=\"trait\" href=\"sui_storage/mutex_table/trait.Lock.html\" title=\"trait sui_storage::mutex_table::Lock\">Lock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_storage/mutex_table/struct.LockTable.html\" title=\"struct sui_storage::mutex_table::LockTable\">LockTable</a>&lt;K, L&gt;"]],
"sui_swarm":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_swarm/memory/struct.Swarm.html\" title=\"struct sui_swarm::memory::Swarm\">Swarm</a>"]],
"telemetry_subscribers":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"telemetry_subscribers/struct.TelemetryGuards.html\" title=\"struct telemetry_subscribers::TelemetryGuards\">TelemetryGuards</a>"]],
"test_cluster":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"test_cluster/struct.RandomNodeRestarter.html\" title=\"struct test_cluster::RandomNodeRestarter\">RandomNodeRestarter</a>"]],
"typed_store":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/rocks/struct.OptimisticTransactionDBWrapper.html\" title=\"struct typed_store::rocks::OptimisticTransactionDBWrapper\">OptimisticTransactionDBWrapper</a>"],["impl&lt;'a, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/test_db/struct.TestDBValues.html\" title=\"struct typed_store::test_db::TestDBValues\">TestDBValues</a>&lt;'a, V&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/metrics/struct.RocksDBPerfContext.html\" title=\"struct typed_store::metrics::RocksDBPerfContext\">RocksDBPerfContext</a>"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/test_db/struct.TestDBIter.html\" title=\"struct typed_store::test_db::TestDBIter\">TestDBIter</a>&lt;'a, K, V&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"enum\" href=\"typed_store/rocks/enum.RocksDB.html\" title=\"enum typed_store::rocks::RocksDB\">RocksDB</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/test_db/struct.DBLocked.html\" title=\"struct typed_store::test_db::DBLocked\">DBLocked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/rocks/struct.DBWithThreadModeWrapper.html\" title=\"struct typed_store::rocks::DBWithThreadModeWrapper\">DBWithThreadModeWrapper</a>"],["impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"typed_store/test_db/struct.TestDBKeys.html\" title=\"struct typed_store::test_db::TestDBKeys\">TestDBKeys</a>&lt;'a, K&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()